import React from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="mainNav">
                    <NavLink to={"/"} className="logo">
                        Logo
                    </NavLink>
                    <nav className="nav">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/account"}>Account</NavLink>
                        <NavLink to={"/help"}>Help</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
