import React from "react";
import { Card, CardBody } from "reactstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const CardChart = ({ title, data, color }) => {
  return (
    <Card className="shadow mb-4">
      <CardBody>
        <h5 className="card-title mb-4">{title}</h5>
        <div className="chart-container">
          <BarChart width={500} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill={color} />
          </BarChart>
        </div>
      </CardBody>
    </Card>
  );
};


const TwoBarChart = ({ title, data, color }) => {
  return (
    <Card className="shadow mb-4">
      <CardBody>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
};

const OtherCharts = ({ title, data, component }) => {
  return (
    <Card className="shadow mb-4">
      <CardBody>
        <component />
      </CardBody>
    </Card>
  );
};

export default CardChart;
