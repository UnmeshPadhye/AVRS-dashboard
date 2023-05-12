import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import ChartCard from "./ChartCard";
import batteryData from "../data/chart-battery";
import Header from './Header';

const mockData = [
    { name: "Monday", value: 10 },
    { name: "Tuesday", value: 20 },
    { name: "Wednesday", value: 15 },
    { name: "Thursday", value: 25 },
    { name: "Friday", value: 30 },
];

const Visualizations = () => {
    return (
        <div className="container-fluid">
            <Header title="Visualizations" />
            <div className="row">
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
                    <ChartCard title="Errors Analysis" data={mockData} />
                </div>
                <div className="col-lg-6 mb-4">
                    <ChartCard title="Performance" data={mockData} />
                </div>

            </div>
        </div>
    );
};

export default Visualizations;
