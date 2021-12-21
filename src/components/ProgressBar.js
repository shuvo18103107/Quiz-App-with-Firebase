/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import classes from '../styles/ProgressBar.module.css';
import Button from './Button';

export default function ProgressBar({ prevBtn, nextBtn, submit, percentage }) {
    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton} onClick={prevBtn}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip}>{`${percentage}% Cimplete!`}</div>
                <div className={classes.rangeBody}>
                    <div className={classes.progress} style={{ width: `${percentage}%` }} />
                </div>
            </div>

            <Button className={classes.next} onClick={percentage === 100 ? submit : nextBtn}>
                <span> {percentage === 100 ? 'Submit' : 'Next Question'}</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
    );
}
