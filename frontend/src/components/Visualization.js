import React from "react";
import CardChart from "./ChartCard";

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
            <h1 className="h3 mb-2 text-gray-800">Visualizations</h1>
            <p className="mb-4">Here are some charts to help you visualize the data:</p>

            <div className="row">
                <div className="col-lg-6 mb-4">
                    <CardChart title="Errors Analysis" data={mockData} />
                </div>
                <div className="col-lg-6 mb-4">
                    <CardChart title="Performance" data={mockData} />
                </div>
            </div>
        </div>
    );
};

export default Visualizations;
