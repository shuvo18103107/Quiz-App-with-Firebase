/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function CheckBox({ text, ...rest }) {
    return (
        <label {...rest}>
            <input type="checkbox" />
            <span> {text}</span>
        </label>
    );
}
