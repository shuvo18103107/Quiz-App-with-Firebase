/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import loginSvg from '../../assets/images/login.svg';
import Illustration from '../Illustration';
import LoginForm from '../LoginForm';

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration img={loginSvg} alt="login" />
                <LoginForm />
            </div>
        </>
    );
}
