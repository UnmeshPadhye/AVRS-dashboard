import React from 'react';
import { Link } from 'react-router-dom';

function RobotCard({ robot }) {
    return (
        <div className="robot-card">
            <h2>{robot.name}</h2>
            <p>Status: {robot.status}</p>
            <p>Location: {robot.latitude}, {robot.longitude}</p>
            <Link to={`/${robot.id}`}>View Details</Link>
        </div>
    );
}

export default RobotCard;
