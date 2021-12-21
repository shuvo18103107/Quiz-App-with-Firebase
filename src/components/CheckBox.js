/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function CheckBox({ text, handler, value, checked, ...rest }) {
    return (
        <label {...rest}>
            <input type="checkbox" onChange={(e) => handler(e, value)} checked={checked} />
            <span> {text}</span>
        </label>
    );
}
