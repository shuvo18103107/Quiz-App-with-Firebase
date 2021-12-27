import React from 'react';

export default function QuestionTitle({ qtitle, title }) {
    return (
        <div className={qtitle}>
            <span className="material-icons-outlined"> help_outline </span>
            {title}
        </div>
    );
}
