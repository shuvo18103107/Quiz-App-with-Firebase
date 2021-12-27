/* eslint-disable react/no-array-index-key */
import React from 'react';
import classes from '../styles/Analysis.module.css';
import Answers from './Answers';
import QuestionTitle from './QuestionTitle';

export default function Question({ answers }) {
    return answers.map((question, index) => (
        <div className={classes.question} key={index}>
            <QuestionTitle qtitle={classes.qtitle} title={question.title} />
            <Answers options={question.options} input={false} />
        </div>
    ));
}

// map kora proti eleemnt ke ekta kore key dite hoi noile ui te render er time e indexing prb kore
// ekahne ans component ta render korar somoi amra input checkbox ta render korbo na just text  ta dekhabo tai ekta props pathaiuye diye signal dibo
