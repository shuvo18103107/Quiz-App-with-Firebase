import React from 'react';

export default function QuestionTitle({ qtitle }) {
    return (
        <div className={qtitle}>
            <span className="material-icons-outlined"> help_outline </span>
            Here goes the question from Learn with Sumit?
        </div>
    );
}
