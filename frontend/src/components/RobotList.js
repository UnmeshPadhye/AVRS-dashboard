import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import robotsData from "./robots";
import axios from 'axios';

const RobotList = ({ robots }) => {

    return (
        <div>
            <Header title={"Robot Collection"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                {robots.map((robot) => (
                    <Link to={`/robot/${robot.id}`} key={robot.id}>
                        <div className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-200 dark:border-gray-100 p-6 my-6">
                            <div className="flex justify-center">
                                <img className="w-36 h-36 object-cover rounded-lg" src={`https://robohash.org/${1}`} alt={`Robot ${robot.name}`} />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2 text-yellow-700">{robot.name}</h2>
                                <p className="text-gray-600">{robot.model}</p>

                                <div className="mt-4">
                                    <Link to={`/robot/${robot.id}`} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                                        Specifications
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RobotList;
