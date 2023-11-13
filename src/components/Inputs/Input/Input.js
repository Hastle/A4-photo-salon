import React from "react";

function Input({ label, type, placeholder }) {

    return (
        <>
            <label>{label}</label>
            <input type={type} placeholder={placeholder}/>
        </>
    );
}

export default Input;