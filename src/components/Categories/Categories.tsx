import React from "react";

import { FaComputer, FaHeart } from "react-icons/fa6";
import { FaHome, FaCar } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { CiBoxes } from "react-icons/ci";

import "./categories.scss";

const fakeCategories = [
    {
        icon: <FaComputer className="icon" />,
        name: "Електроніка",
        category: "electronics",
    },
    {
        icon: <FaHome className="icon" />,
        name: "Дім та сад",
        category: "home",
    },
    {
        icon: <GiClothes className="icon" />,
        name: "Одяг та взуття",
        category: "clothing",
    },
    {
        icon: <MdOutlineSportsSoccer className="icon" />,
        name: "Спорт",
        category: "sport",
    },
    {
        icon: <FaCar className="icon" />,
        name: "Транспорт",
        category: "transport",
    },
    {
        icon: <FaHeart className="icon" />,
        name: "Благодійність",
        category: "charity",
    },
    {
        icon: <CiBoxes className="icon" />,
        name: "Інше",
        category: "others",
    },
];

const Categories: React.FC = () => {
    return (
        <section className="categories">
            <div className="wrapper">
                <div className="categoriesList">
                    {fakeCategories.map((category) => (
                        <div key={category.name} className="category">
                            {category.icon}
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
