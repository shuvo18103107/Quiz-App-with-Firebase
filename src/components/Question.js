import React from 'react';
import classes from '../styles/Analysis.module.css';
import Answers from './Answers';
import QuestionTitle from './QuestionTitle';

export default function Question() {
    return (
        <div className={classes.question}>
            <QuestionTitle qtitle={classes.qtitle} />
            <Answers />
        </div>
    );
}
