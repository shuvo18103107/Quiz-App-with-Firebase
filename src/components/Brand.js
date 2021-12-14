import React from 'react';
import logo from '../assets/images/logo-bg.png';
import classes from '../styles/Brand.module.css';

export default function Brand() {
    return (
        <ul>
            <li>
                <a href="index.html" className={classes.brand}>
                    <img src={logo} alt="Learn with Sumit Logo" />
                    <h3>Thnik Like a Coder</h3>
                </a>
            </li>
        </ul>
    );
}
