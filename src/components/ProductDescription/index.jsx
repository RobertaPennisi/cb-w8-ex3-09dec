import React from "react";
import "./style.css"

const ProductDescription = ({prodTitle, prodPrice, prodParagraph}) => (
    <div className="product-description">
        <div className="product-info">
            <h3>{prodTitle}</h3>
            <h3>{prodPrice} $</h3>
        </div>
        <p>{prodParagraph}</p>
    </div>
);

export default ProductDescription