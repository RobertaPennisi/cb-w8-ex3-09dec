import React from "react";

const ColorSelector = ({color1, color2, color3, color4}) => (
    <div className="color-selector">
        <h3>Colors</h3>
        <span className="radio-select">
            <input type="radio" id={color1} name="color"/>
            <label for={color1}>{color1}</label>
        </span>
        <span className="radio-select">
            <input type="radio" id={color2} name="color"/>
            <label for={color2}>{color2}</label>
        </span>
        <span className="radio-select">
            <input type="radio" id={color3} name="color"/>
            <label for={color3}>{color3}</label>
        </span>
        <span className="radio-select">
            <input type="radio" id={color4} name="color"/>
            <label for={color4}>{color4}</label>
        </span>
    </div>
);

export default ColorSelector