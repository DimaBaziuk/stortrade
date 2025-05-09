import React from "react";
import { NavLink } from "react-router-dom";

import Small_logo from "../../assets/icons/small_logo.png";

import "./footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <section className="wrapper">
                <div className="footer_navigation">
                    <NavLink to={"/"} className="logoLink">
                        <img src={Small_logo} alt="logo" />
                    </NavLink>

                    <div className="nav">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/account"}>Account</NavLink>
                        <NavLink to={"/help"}>Help</NavLink>
                    </div>
                </div>
                <p></p>
            </section>
        </footer>
    );
};

export default Footer;
