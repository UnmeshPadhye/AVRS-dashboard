import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RobotList from "./components/RobotList";
import RobotDetailsWrapper from "./components/RobotDetailsWrapper";
import "./App.css";
import robotsData from "./components/robots";

function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    setRobots(robotsData);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<RobotList robots={robots} />}
          />
          <Route
            path="/robot/:id"
            element={<RobotDetailsWrapper robots={robots} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
