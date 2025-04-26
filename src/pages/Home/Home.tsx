import React from "react";
import Categories from "../../components/Categories/Categories";
import { Typography } from "antd";

import "./home.scss";

const { Title } = Typography;

const Home: React.FC = () => {
    return (
        <section className="home main_container_box">
            <div className="wrapper">
                <Title className="header">Сервіси на STTrade</Title>
                <Categories />
            </div>
        </section>
    );
};

export default Home;
