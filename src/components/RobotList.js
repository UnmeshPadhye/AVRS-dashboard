import React from 'react';
import { Link } from 'react-router-dom';

const RobotList = ({ robots }) => {
    return (
        <div className="flex justify-evenly my-12">
            {robots.map((robot) => (
                <Link to={`/robot/${robot.id}`} key={robot.id}>
                    <div>
                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-100 py-10 my-10">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-700">{robot.name}</h5>
                            </a>

                            <a href="#" class="inline-flex items-center px-3 py-2 m-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Specs
                            </a>
                        </div>

                    </div>
                </Link>
            ))}
        </div>
    );
};

export default RobotList;
