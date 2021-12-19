import React from 'react';
import video from '../styles/Video.module.css';

export default function Video({ questionNum, title, id }) {
    console.log(id);
    return (
        <div className={video.video}>
            <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
            <p>{title}</p>
            <div className={video.qmeta}>
                <p>{questionNum} Questions</p>
                <p>Total Points: {questionNum * 5} </p>
            </div>
        </div>
    );
}

// video id use kore youtube theke thumbnail image gula niya asci maxresdefault.jpg dile maximum resoulution wala image ta niya asbe
