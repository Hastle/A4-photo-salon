import React from "react";

function Input({ label, type, placeholder, onChange }) {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} onChange={handleChange} />
        </>
    );
}

export default Input;