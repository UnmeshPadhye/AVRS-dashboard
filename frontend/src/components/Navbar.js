import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar shadow drop-shadow-md hover:drop-shadow-xl bg-gradient-to-r from-emerald-400 to-blue-500 ">
            <Link to="/" className="navbar__logo">
                <div className="flex flex-center">
                    <img className="bg-white-rounded" width="64" height="64" src="https://img.icons8.com/nolan/64/bot.png" alt="bot" />
                    <span className="ml-4 text-purple-700 hover:text-black">Robot Dashboard</span>
                </div>

            </Link>
            <div className="navbar__links">
                <Link to="/" className="navbar__link"></Link>
                <Link to="/reports" className="navbar__link">
                    Reports
                </Link>
                <Link to="/visualizations" className="navbar__link">
                    Visualizations
                </Link>
                <Link to="/data" className="navbar__link">
                    Data
                </Link>
                <Link to="/robots/642f5f5fc37fdafc93e29cd2/feed" className="navbar__link">
                    Live Feed
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
