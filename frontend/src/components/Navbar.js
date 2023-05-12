import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logo">
                Robot Dashboard
            </Link>
            <div className="navbar__links">
                <Link to="/" className="navbar__link">

                </Link>
                <Link to="/reports" className="navbar__link">
                    Reports
                </Link>
                <Link to="/visualizations" className="navbar__link">
                    Visualizations
                </Link>
                <Link to="/data" className="navbar__link">
                    Data
                </Link>
                <Link to="/live-feed" className="navbar__link">
                    Live Feed
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
