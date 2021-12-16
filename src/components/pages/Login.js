/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import loginSvg from '../../assets/images/login.svg';
import Button from '../Button';
import Form from '../Form';
import Illustration from '../Illustration';
import Info from '../Info';
import TextInput from '../TextInput';

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration img={loginSvg} alt="login" />

                <Form className="login form" action="#">
                    <TextInput type="text" placeholder="Enter email" icon="alternate_email " />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <Button>
                        {' '}
                        <span> Submit now</span>
                    </Button>
                    <Info>
                        Don't have an account? <Link to="/signup">Signup</Link> instead.
                    </Info>
                </Form>
            </div>
        </>
    );
}
