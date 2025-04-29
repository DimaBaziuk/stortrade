import React from "react";

import "./productCard.scss";

const ProductCard: React.FC = () => {
    return (
        <div className="productCard">
            <img src="" alt="img" />
            <div className="info">
                <div className="top">name, price, add to list</div>
                <div className="bottom">time or location</div>
            </div>
        </div>
    );
};

export default ProductCard;
