import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from './Header';

import { useState, useEffect } from 'react';

const CameraFeed = () => {
    const [stream, setStream] = useState(null);
    const [error, setError] = useState(false);

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

        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(success)
            .catch(failure);

        return () => {
            if (stream) {
                stream.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);

    return (
        <div>
            <Header title={`Camera feed`} />
            {error ? (
                <p>Video not available</p>
            ) : (
                <video
                    style={{ maxWidth: '100%' }}
                    autoPlay
                    playsInline
                    muted
                    ref={(video) => {
                        if (video && stream) {
                            video.srcObject = stream;
                        }
                    }}
                />
            )}
        </div>
    );
};

export default CameraFeed;
