import React from 'react';
import videos from '../styles/Videos.module.css';
import Video from './Video';

export default function Videos() {
    return (
        <div className={videos.videos}>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    );
}
