/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Form from './Form';
import Info from './Info';
import TextInput from './TextInput';

export default function LoginForm() {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setloading] = useState('');
    const [error, seterror] = useState('');
    const { login } = useAuth();
    const history = useHistory(); // hhok should be always in top level
    async function loginHandler(e) {
        e.preventDefault();
        try {
            setloading(true);
            await login(email, password);

            history.push('/');
        } catch (err) {
            console.log(err);
            setloading(false);
            seterror('Login Failed 🚨');
        }
    }

    return (
        <div>
            <Form className="login form" action="#" onSubmit={loginHandler}>
                <TextInput
                    type="text"
                    placeholder="Enter email"
                    value={email}
                    required
                    onChange={(e) => setemail(e.target.value)}
                    icon="alternate_email "
                />
                <TextInput
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    icon="lock"
                    required
                />
                <Button type="submit" disabled={loading}>
                    {' '}
                    <span> Submit now</span>
                </Button>
                {error && <p className="error"> {error}</p>}

                <Info>
                    Don't have an account? <Link to="/signup">Signup</Link> instead.
                </Info>
            </Form>
        </div>
    );
}
