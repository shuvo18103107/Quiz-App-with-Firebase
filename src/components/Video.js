import React from 'react';
import bannaerImage from '../assets/images/3.jpg';
import video from '../styles/Video.module.css';

export default function Video() {
    return (
        <a href="quiz.html">
            <div className={video.video}>
                <img src={bannaerImage} alt="bannerImage" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={video.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    );
}
