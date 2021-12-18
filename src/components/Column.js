import React from 'react';
import signUpSvg from '../assets/images/signup.svg';
import Illustration from './Illustration';
import SignUpForm from './SignUpForm';

export default function Column() {
    return (
        <div className="column">
            <Illustration img={signUpSvg} alt="signup" />
            <SignUpForm />
        </div>
    );
}
