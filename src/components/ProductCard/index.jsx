import React from "react";
import ProductDescription from "../ProductDescription" 
import ColorSelector from "../ColorSelector"
import SizeSelector from "../SizeSelector"
import "./style.css"

const ProductCard = ({image, prodTitle, prodPrice, prodParagraph, color1, color2, color3, color4, size1, size2, size3}) => (
    <div className="product-card">
        <div className="image">
        </div>
        <div className="text-block">
            <ProductDescription prodTitle={prodTitle} prodPrice={prodPrice} prodParagraph={prodParagraph}></ProductDescription>
            <ColorSelector color1={color1} color2={color2} color3={color3} color4={color4}></ColorSelector>
            <SizeSelector size1={size1} size2={size2} size3={size3}></SizeSelector>
            <button>Add To Cart</button>
        </div>
    </div>
);

export default ProductCard