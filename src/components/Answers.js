/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import classes from '../styles/Answers.module.css';
import CheckBox from './CheckBox';

export default function Answers({ options = [], handleChange, input }) {
    // in options we get an array of objects based on this we create checkbox [{title: 'new var', checked: false} ,{}]
    console.log(options); // array of options [{title,correct, checked}] jegula match oi gulai cheked o thakbe
    return (
        <div className={classes.answers}>
            {options.map((option, index) => (
                <Fragment key={index}>
                    {input ? (
                        // quize page checkbox
                        <CheckBox
                            className={classes.answer}
                            value={index} // jate amra index gula pete pari cg amra controlled way te ei index gular value control korbo
                            text={option.title}
                            handler={handleChange} // ekahne index r event ta pass korbo
                            checked={option.checked} // checked ekhane at fiest false asbe pore handleChange e click korle usereducer diye state ta true kore componnet re render kore checked true banai dibo
                            onChange={(e) => handleChange(e, index)}
                        />
                    ) : (
                        // result page checkbox
                        <CheckBox
                            className={`${classes.answer} ${
                                // dynamically coorect r wrong class set korbo
                                // eslint-disable-next-line no-nested-ternary
                                option.correct
                                    ? classes.correct
                                    : option.checked // wrong class sob checkbox e dekhano na jegulai checked korci true segula
                                    ? classes.wrong
                                    : null
                            }`}
                            value={index}
                            text={option.title}
                            defaultChecked={option.checked} // ans state e already amra options array te je ans gula milce sekhane checked property create kore true banai dici, tai updated ei ans state e ekhn amra true pabo jegula milce bakigula false hisabe automatic thakbe cg checked property oi gulais et kori nai
                            disabled
                        />
                    )}
                </Fragment>
            ))}
        </div>
    );
}
