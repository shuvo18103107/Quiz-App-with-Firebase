/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useRef } from 'react/cjs/react.development';
import classes from '../styles/Miniplayer.module.css';

export default function Miniplayer({ videoId, videoTitle }) {
    const btnRef = useRef();
    const [status, setstatus] = useState(false);
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    function toogleButton() {
        if (!status) {
            btnRef.current.classList.remove(classes.floatingBtn);
            setstatus(true);
        } else {
            btnRef.current.classList.add(classes.floatingBtn);
            setstatus(false);
        }
    }
    return (
        <div
            className={`${classes.miniPlayer} ${classes.floatingBtn}`}
            ref={btnRef}
            onClick={toogleButton}
        >
            <span className={`${classes.open} material-icons-outlined`}> play_circle_filled </span>
            <span className={`${classes.close} material-icons-outlined`} onClick={toogleButton}>
                {' '}
                close{' '}
            </span>
            <ReactPlayer
                className={classes.player}
                url={videoUrl}
                width="300px"
                height="168px"
                playing={status}
                controls
            />
            <p>{videoTitle}</p>
        </div>
    );
}
