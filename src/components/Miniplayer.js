import React from 'react';
import img from '../assets/images/3.jpg';
import classes from '../styles/Miniplayer.module.css';

export default function Miniplayer() {
    return (
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
            <span className={`${classes.open} material-icons-outlined`}> play_circle_filled </span>
            <span className={`${classes.close} material-icons-outlined`}> close </span>
            <img src={img} alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
}
