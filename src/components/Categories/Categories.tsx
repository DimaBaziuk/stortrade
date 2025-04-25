import React from "react";

import { FaComputer } from "react-icons/fa6";
import { FaHome, FaCar } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { CiBoxes } from "react-icons/ci";

const fakeCategories = [
    {
        icon: <FaComputer />,
        name: "Електроніка",
        category: "electronics",
    },
    {
        icon: <FaHome />,
        name: "Дім та сад",
        category: "home",
    },
    {
        icon: <GiClothes />,
        name: "Одяг та взуття",
        category: "clothing",
    },
    {
        icon: <MdOutlineSportsSoccer />,
        name: "Спорт",
        category: "sport",
    },
    {
        icon: <FaCar />,
        name: "Транспорт",
        category: "transport",
    },
    {
        icon: <CiBoxes />,
        name: "Інше",
        category: "others",
    },
];

const Categories: React.FC = () => {
    return (
        <section className="categories">
            <div className="wrapper">
                <div className="catalog"></div>
            </div>
        </section>
    );
};

export default Categories;
