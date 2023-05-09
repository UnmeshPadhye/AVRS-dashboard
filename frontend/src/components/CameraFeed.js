import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { BACKEND_URL } from "../config/url";

const CameraFeed = () => {
    const [stream, setStream] = useState(null);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/robots/live`, { responseType: 'arraybuffer' });
                const reader = response.data[Symbol.asyncIterator]();
                const contentType = response.headers.get('content-type');
                const boundary = `--${contentType.split(';')[1].split('=')[1]}\r\n`;
                let data = '';
                let isDataStarted = false;

                const consume = async () => {
                    const { done, value } = await reader.next();
                    if (done) {
                        console.log('Stream finished');
                        return;
                    }
                    data += new TextDecoder().decode(value);
                    if (data.includes(boundary)) {
                        if (!isDataStarted) {
                            isDataStarted = true;
                            const start = data.indexOf(boundary) + boundary.length;
                            data = data.slice(start);
                        } else {
                            const end = data.indexOf(boundary);
                            const blob = new Blob([data.slice(0, end)], { type: 'image/jpeg' });
                            const url = URL.createObjectURL(blob);
                            setStream(url);
                            data = data.slice(end + boundary.length);
                        }
                    }
                    consume();
                };

                consume();
            } catch (error) {
                console.error(error);
                setError(true);
            }
        };
        fetchData();
    }, []);


    const handleDirection = (direction) => {
        console.log(`Moving robot ${id}: ${direction}`);
        axios.post('/api/move', {
            direction: direction,
            robotID: id
        })
            .then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
    };

    const Object = ({ type, message, time }) => (
        <div className="flex justify-right py-1">
            <p className="font-bold">{type}</p>
            <p className="ml-2 text-gray-600">{message}</p>
            <p className="ml-2 text-gray-600">{time}</p>
        </div>
    );

    const Objects = ({ notifications }) => (
        <div className="bg-gray-100 rounded-md shadow-lg p-4">
            <h2 className="font-bold mb-4">Detected Objects</h2>
            {/*  <div>
        {notifications.map((notification) => (
          <Notification key={notification.type} type={notification.type} message={notification.message} time={notification.time} />
        ))}
      </div> */}
        </div>
    );

    return (
        <div>
            <Header title={`Camera feed`} />
            <div className="flex justify-center items-center">
                {error ? (
                    <p>Video not available</p>
                ) : (
                    <>
                        <div className="relative w-full h-full">
                            <video
                                width="640"
                                height="480"
                                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                                controls
                                autoPlay
                                playsInline
                                muted
                                ref={(video) => {
                                    if (video && stream) {
                                        video.srcObject = stream;
                                    }
                                }}
                            />
                            <div className="bg-slate-200 w-64 h-84 ml-60">
                                <div className="top-10 right-0 flex flex-col justify-center items-center">
                                    <div className="w-24 h-24 bg-white bg-opacity-90 rounded-full flex justify-center items-center ">
                                        <button onClick={() => handleDirection("forward")} className="text-2xl">
                                            ↑
                                        </button>
                                    </div>
                                    <div className="-ml-36">
                                        <div className="w-24 h-24 bg-white bg-opacity-90 rounded-full flex justify-center items-center">
                                            <button onClick={() => handleDirection("left")} className="text-2xl">
                                                ←
                                            </button>
                                        </div>
                                    </div>

                                    <div className="w-24 h-24 bg-white bg-opacity-90 rounded-full flex justify-center items-center mt-4">
                                        <button onClick={() => handleDirection("back")} className="text-2xl">
                                            ↓
                                        </button>
                                    </div>
                                    <div className="-mr-36 -mt-56">
                                        <div className="w-24 h-24 bg-white bg-opacity-90 rounded-full flex justify-center items-center mt-4">
                                            <button onClick={() => handleDirection("right")} className="text-2xl">
                                                →
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <div className="mb-4">
                                <Objects />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );

};

export default CameraFeed;
