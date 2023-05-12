import React from 'react';
import { LineChart, Line, XAxis, Area, Bar, Scatter, ComposedChart, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import ChartCard from "./ChartCard";
import batteryData from "../data/chart-battery";
import Header from './Header';
import { multiBot } from '../data/chart-multibot';

const objectsDetected = [
    { time: "00:00", value: 10 },
    { time: "00:01", value: 20 },
    { time: "00:02", value: 15 },
    { time: "00:03", value: 25 },
    { time: "00:04", value: 22 },
    { time: "00:05", value: 30 },
    { time: "00:06", value: 30 },
    { time: "00:07", value: 25 },
    { time: "00:08", value: 30 },
    { time: "00:09", value: 32 },
    { time: "00:10", value: 31 },
    { time: "00:11", value: 27 },
];

const Visualizations = () => {
    return (
        <div className="container-fluid">
            <Header title="Visualizations" />
            <div className="row my-5 py-4">
                <div className="col-lg-6 mb-4">
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
                <div className="col-lg-6 mb-4">
                    <div className="col-lg-6 mb-4">
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
                <div className='flex basis-1/2'>

                    <div className="col-lg-6 mb-4">
                        <ChartCard title="Errors Analysis" data={objectsDetected} color="#2884d8" />
                    </div>

                    <div className="col-lg-6 mb-4">
                        <ChartCard title="Performance" data={objectsDetected} color="#008400" />
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Visualizations;
