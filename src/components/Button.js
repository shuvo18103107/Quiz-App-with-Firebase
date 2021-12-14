import React from 'react';
import classes from '../styles/Button.module.css';

export default function Buttons({ children }) {
    return (
        <button type="submit" className={classes.button}>
            <span>{children}</span>
        </button>
    );
}
