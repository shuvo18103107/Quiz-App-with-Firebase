import React from 'react';
import Form from './Form';
import Illustration from './Illustration';
import signUpSvg from '../assets/images/signup.svg';
import TextInput from './TextInput';
import CheckBox from './CheckBox';
import Button from './Button';
import Info from './Info';

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
                <Button>Submit now</Button>

                <Info>
                    Already have an account? <a href="login.html">Login</a> instead.
                </Info>
            </Form>
        </div>
    );
}
