import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import image1 from '../data/images/1.jpg'
import image2 from '../data/images/2.jpg'
import image3 from '../data/images/3.jpg'
import image4 from '../data/images/4.jpg'


const getImageName = (index) => {
    let name = '${}image' + index.toString()
    console.log(name);
}

const RobotList = ({ robots }) => {
    console.log(robots)


    robots[0].imagesrc = image1
    robots[1].imagesrc = image2
    robots[2].imagesrc = image3
    robots[3].imagesrc = image4

    return (
        <div>
            <Header title={"Robot Collection"} />
            <div className=''>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                    {robots.map((robot, index) => (
                        <Link to={`/robot/${robot._id}`} index={index}>
                            <div className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-200 dark:border-gray-100 p-6 my-6">
                                <div className="flex justify-center">
                                    <img className="w-36 h-36 object-cover rounded-lg" src={robot.imagesrc} alt={`Robot ${robot.name}`} />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold mb-2 text-yellow-700">{robot.name}</h2>
                                    <p className="text-gray-600">{robot.model}</p>

                                    <div className="mt-4">
                                        <Link to={`/robot/${robot._id}`} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                                            Specifications
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RobotList;
