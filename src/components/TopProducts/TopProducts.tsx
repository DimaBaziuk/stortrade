import React from "react";
import { Typography } from "antd";

import "./topProducts.scss";
import ProductCard from "../ProductCard/ProductCard";

const fakeData = [
    {
        id: "1",
        img: "https://i.moyo.ua/img/media/images/1920%D1%851080_2365(1).jpg",
        name: "Name 0",
        price: "2000",
        date: "12/20/2020",
    },
    {
        id: "2",
        img: "https://s.ek.ua/posts/files/5999/wide_pic.jpg",
        name: "Name 1",
        price: "244",
        date: "12/20/2023",
    },
    {
        id: "3",
        img: "https://s.ek.ua/jpg_zoom1/1710960.jpg",
        name: "Name 2",
        price: "422",
        date: "12/20/2024",
    },
    {
        id: "4",
        img: "https://down-th.img.susercontent.com/file/th-11134207-7r98w-lwxsnfh5r3kf86",
        name: "Name 4",
        price: "1334",
        date: "12/20/2025",
    },
];

const { Title } = Typography;

const TopProducts: React.FC = () => {
    return (
        <section className="topProducts">
            <div className="wrapper">
                <Title level={2} className="heading">
                    Топ оголошення
                </Title>
                <div className="productsList">
                    {fakeData.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopProducts;
