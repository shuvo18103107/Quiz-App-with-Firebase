import React from 'react';
import classes from '../styles/Button.module.css';

export default function Buttons({ children, className, ...rest }) {
    return (
        // eslint-disable-next-line react/button-has-type
        <button {...rest} className={`${classes.button} ${className}`}>
            {children}
        </button>
    );
}
