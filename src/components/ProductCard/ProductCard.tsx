import React from "react";

import "./productCard.scss";

interface Product {
    product: {
        id: string;
        img: string;
        name: string;
        price: string;
        date: string;
    };
}

const ProductCard: React.FC<Product> = ({ product }: Product) => {
    return (
        <div className="productCard">
            <img src={product.img} alt="img" />
            <div className="info">
                <div className="top">
                    {product.name}, {product.price}
                </div>
                <div className="bottom">{product.date}</div>
            </div>
        </div>
    );
};

export default ProductCard;
