import React from 'react';
import signUpSvg from '../assets/images/signup.svg';
import Button from './Button';
import CheckBox from './CheckBox';
import Form from './Form';
import Illustration from './Illustration';
import Info from './Info';
import TextInput from './TextInput';

export default function Column() {
    return (
        <div className="column">
            <Illustration img={signUpSvg} alt="signup" />
            <Form className="signup form" action="#">
                <TextInput type="text" placeholder="Enter name" icon="person" />
                <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
                <TextInput type="password" placeholder="Enter password" icon="lock" />
                <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />
                <CheckBox text="I agree to the Terms & Conditions" />
                <Button>
                    {' '}
                    <span> Submit now</span>
                </Button>

                <Info>
                    Already have an account? <a href="login.html">Login</a> instead.
                </Info>
            </Form>
        </div>
    );
}
