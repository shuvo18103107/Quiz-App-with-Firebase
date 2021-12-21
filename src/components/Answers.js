import React from 'react';
import classes from '../styles/Answers.module.css';
import CheckBox from './CheckBox';

export default function Answers({ options = [], handleChange }) {
    // in options we get an array of objects based on this we create checkbox [{title: 'new var', checked: false} ,{}]
    return (
        <div className={classes.answers}>
            {options.map((option, index) => (
                <CheckBox
                    className={classes.answer}
                    value={index}
                    text={option.title}
                    handler={handleChange}
                    checked={option.checked} // checked ekhane at fiest false asbe pore handleChange e click korle usereducer diye state ta true kore componnet re render kore checked true banai dibo
                />
            ))}
        </div>
    );
}
