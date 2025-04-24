import React from "react";
import { Typography } from "antd";

import "./home.scss";

const { Title } = Typography;

const Home: React.FC = () => {
    return (
        <section className="home">
            <div className="wrapper">
                <Title className="header">Сервіси на STTrade</Title>
            </div>
        </section>
    );
};

export default Home;
