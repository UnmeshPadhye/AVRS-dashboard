import React from 'react';
import { Link } from 'react-router-dom';

const CameraFeed = (robot) => {

    const { id, name, model, manufacturer, serialNumber, height, mass, status, description } = robot;

    return (
        <nav className="my-8 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <div className="container-fluid">
                <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
                    Camera Feed for {name}
                </span>
            </div>
        </nav>
    );
};

export default CameraFeed;
