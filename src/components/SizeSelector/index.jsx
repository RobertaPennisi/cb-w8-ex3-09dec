import React from "react";

const SizeSelector = ({size1, size2, size3}) => (
    <div className="size-selector">
        <h3>Size</h3>
        <button>{size1}</button>
        <button>{size2}</button>
        <button>{size3}</button>
    </div>
);

export default SizeSelector