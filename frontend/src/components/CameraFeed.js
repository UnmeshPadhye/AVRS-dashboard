import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import axios from "axios"

const CameraFeed = () => {
    const [stream, setStream] = useState(null);
    const [error, setError] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        const constraints = {
            video: true,
        };

        const success = (stream) => {
            setStream(stream);
        };

        const failure = (error) => {
            setError(true);
            console.error(error);
        };

        navigator.mediaDevices.getUserMedia(constraints).then(success).catch(failure);

        return () => {
            if (stream) {
                stream.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);

    const handleDirection = (direction) => {
        // Backend call for Robot Movement 
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
            <Header title={`Robot Feed`} />
            <div className="flex justify-center items-center">
                {error ? (
                    <p>Video not available</p>
                ) : (
                    <>
                        <div className="relative w-full h-full flex flex-col md:flex-row">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-1/2">
                                    <div className="relative h-full">
                                        <p> Video Feed </p>
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
                                        <iframe id="stream" src="http://172.20.10.2:5000/video_feed"></iframe>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="relative h-full">
                                        <p> Bird Eye View </p>
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
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="relative h-full">
                                        <p> Lidar Feed </p>
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


                                    </div>
                                </div>
                                <div className="">
                                    <div className="w-full md:w-1/3 px-2">
                                        <div className="mb-4">
                                            <Objects />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );



};

export default CameraFeed;
