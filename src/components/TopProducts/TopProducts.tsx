import React from "react";

import "./topProducts.scss";

const fakeData = [
    {
        id: "1",
        img: "https://i.moyo.ua/img/media/images/1920%D1%851080_2365(1).jpg",
        name: "Name 0",
        price: "2000",
        date: "",
    },
    {
        id: "2",
        img: "https://s.ek.ua/posts/files/5999/wide_pic.jpg",
        name: "Name 1",
        price: "",
        date: "",
    },
    {
        id: "3",
        img: "https://s.ek.ua/jpg_zoom1/1710960.jpg",
        name: "Name 2",
        price: "",
        date: "",
    },
    {
        id: "4",
        img: "https://down-th.img.susercontent.com/file/th-11134207-7r98w-lwxsnfh5r3kf86",
        name: "Name 4",
        price: "",
        date: "",
    },
];

const TopProducts: React.FC = () => {
    return <section className="topProducts">TopRate</section>;
};

export default TopProducts;
