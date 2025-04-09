import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import "./header.scss";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="mainNav">
                <Link to={"/"} className="logo">
                    Logo
                </Link>
                <nav className="nav">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/account"}>Account</Link>
                    <Link to={"/help"}>Help</Link>
                </nav>
            </div>
            <SearchBar />
        </header>
    );
};

export default Header;
