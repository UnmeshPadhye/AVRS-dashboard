import React, { useState, useEffect } from "react";
import { useParams, Route, Routes } from "react-router-dom";
import RobotDetails from "./RobotDetails";
import robotsData from "./robots";

const RobotDetailsWrapper = ({ robots }) => {
    const { id } = useParams();
    const robot = robots.find((r) => r.id === Number(id));


    return (
        <Routes>
            <Route path="/" element={<RobotDetails robot={robot} />} />
        </Routes>
    );
}

export default RobotDetailsWrapper;
