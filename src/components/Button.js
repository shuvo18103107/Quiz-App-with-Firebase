import React from 'react';
import classes from '../styles/Button.module.css';

export default function Buttons({ children, className }) {
    return (
        // eslint-disable-next-line react/button-has-type
        <div className={`${classes.button} ${className}`}>{children}</div>
    );
}
