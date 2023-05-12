import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CameraFeed from "./components/CameraFeed";
import RobotList from "./components/RobotList";
import RobotDetailsWrapper from "./components/RobotDetailsWrapper";
import "./App.css";
import robotsData from "./components/robots";
import axios from "axios";
import { BACKEND_URL } from './config/url';
import Navbar from "./components/Navbar";


function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    setRobots(robotsData);
    console.log(BACKEND_URL);
    axios.get(`${BACKEND_URL}/robots`)
      .then(res => {
        setRobots(res.data.robots);
        console.log(res.data.robots);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<RobotList robots={robots} />}
          />
          <Route
            path="/robot/:id"
            element={<RobotDetailsWrapper robots={robots} />}
          />
          <Route
            path="/robots/:id/feed"
            element={<CameraFeed />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
