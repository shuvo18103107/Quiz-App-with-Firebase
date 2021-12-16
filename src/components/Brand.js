import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-bg.png';
import classes from '../styles/Brand.module.css';

export default function Brand() {
    return (
        <ul>
            <li>
                <Link to="/" className={classes.brand}>
                    <img src={logo} alt="Learn with Sumit Logo" />
                    <h3>Thnik Like a Coder</h3>
                </Link>
            </li>
        </ul>
    );
}
