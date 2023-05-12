import React from "react";
import { Card, CardBody } from "reactstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const VisualizationCard = ({ title, data }) => {
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
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
      </CardBody>
    </Card>
  );
};

export default VisualizationCard;
