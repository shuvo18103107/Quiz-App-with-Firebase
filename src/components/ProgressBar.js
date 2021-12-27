/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState } from 'react';
import classes from '../styles/ProgressBar.module.css';
import Button from './Button';

export default function ProgressBar({ prevBtn, nextBtn, submit, percentage }) {
    const tooltipRef = useRef();
    const [tooltip, settooltip] = useState(false);
    function toogleToolTip() {
        if (tooltip) {
            settooltip(false);
            tooltipRef.current.style.display = 'none';
        } else {
            settooltip(true);
            tooltipRef.current.style.left = `calc(${percentage}% - 65px)`;
            tooltipRef.current.style.display = 'block';
        }
    }
    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton} onClick={prevBtn}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip} ref={tooltipRef}>{`${percentage}% Complete!`}</div>
                <div className={classes.rangeBody}>
                    <div
                        className={classes.progress}
                        style={{ width: `${percentage}%` }}
                        onMouseOver={toogleToolTip}
                        onMouseOut={toogleToolTip}
                    />
                </div>
            </div>

            <Button className={classes.next} onClick={percentage === 100 ? submit : nextBtn}>
                <span> {percentage === 100 ? 'Submit' : 'Next Question'}</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
    );
}
