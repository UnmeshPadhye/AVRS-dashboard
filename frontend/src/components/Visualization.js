import React from 'react';
import { LineChart, Line, XAxis, Area, Bar, BarChart, ComposedChart, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import ChartCard from "./ChartCard";
import batteryData from "../data/chart-battery";
import Header from './Header';
import { multiBot } from '../data/chart-multibot';
import objectsDetected from '../data/chart-object-detection';
import { errorData } from '../data/error-data';


const Visualizations = () => {
    return (
        <div className="container-fluid">
            <Header title="Visualizations" />
            <div className="row my-5 py-4">
                <div className="col-lg-6 mb-4 drop-shadow-md">
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart
                            data={batteryData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="level" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="voltage" stroke="#ffc658" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="card card-shadow col-lg-6 mb-4">
                    <div className="col-lg-6 mb-4 drop-shadow-md">
                        <h5 className='card-title mb-1'> Multibot Performance</h5>
                        <ResponsiveContainer width="100%" height={400}>
                            <ComposedChart
                                width={500}
                                height={400}
                                data={multiBot}
                                margin={{
                                    top: 20,
                                    right: 80,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="name" label={{ value: 'Pages', position: '', offset: 0 }} scale="" />
                                <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="Throughput" fill="#8884d8" stroke="#8884d8" />
                                <Bar dataKey="resolutions" barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="errors" stroke="#ff7300" />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>

                </div>
                <div className='flex'>
                    <div className="card shadow basis-1/2">
                        <h5 className='card-title mb-1'> Hourly error resolutions</h5>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart
                                width={500}
                                height={300}
                                data={errorData}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="value" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="errors" fill="#8884d8" />
                                <Bar dataKey="resolutions" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="basis-1/2 mt-10 ml-4 drop-shadow-lg">
                        <ChartCard title="Performance" data={objectsDetected} color="#008400" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Visualizations;
