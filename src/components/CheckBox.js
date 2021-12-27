/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function CheckBox({ className, text, ...rest }) {
    return (
        <label className={className}>
            <input type="checkbox" {...rest} /> <span>{text}</span>
        </label>
    );
}
