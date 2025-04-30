import React from "react";
import Categories from "../../components/Categories/Categories";
import { Typography } from "antd";

import "./home.scss";
import TopProducts from "../../components/TopProducts/TopProducts";

const { Title } = Typography;

const Home: React.FC = () => {
    return (
        <section className="home main_container_box">
            <div className="wrapper">
                <Title className="header">Сервіси</Title>
                <Categories />
            </div>
            <TopProducts />
        </section>
    );
};

export default Home;
