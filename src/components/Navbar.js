import React from "react";
import airbnbLogo from "../images/airbnb1.png"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <img src={airbnbLogo} alt="airbnb-logo" className="nav-bar--logo" />
        </nav>
    )
}