import React from 'react';
import "../App.css";

const Button = ({ className, onClick, children }) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
