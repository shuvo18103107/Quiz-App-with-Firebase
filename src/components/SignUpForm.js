import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import CheckBox from './CheckBox';
import Form from './Form';
import Info from './Info';
import TextInput from './TextInput';

export default function SignUpForm() {
    const [username, setusername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [agree, setAgree] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState();
    const { signup } = useAuth();
    const history = useHistory();
    // eslint-disable-next-line consistent-return
    async function handleSubmit(e) {
        e.preventDefault();
        // check pass and confirmpass same or not
        if (password !== confirmPassword) {
            return setError("Password don't match 🚨 ");
        }
        try {
            setError('');
            setLoading(true);
            await signup(email, password, username);
            // signin done redirect kore dibo homepage e
            history.push('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(err.message);
        }
    }
    return (
        // eslint-disable-next-line react/jsx-no-bind
        <Form className="signup form" action="#" onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Enter name"
                icon="person"
                value={username}
                required
                onChange={(e) => setusername(e.target.value)}
            />
            <TextInput
                type="text"
                placeholder="Enter email"
                required
                icon="alternate_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="Enter password"
                required
                icon="lock"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="Confirm password"
                required
                icon="lock_clock"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
            />
            <CheckBox
                text="I agree to the Terms & Conditions"
                required
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
            />
            <Button type="submit" disabled={loading}>
                {' '}
                <span> Submit now</span>
            </Button>
            {error && <p className="error"> {error}</p>}
            <Info>
                Already have an account? <Link to="/login">Login</Link> instead.
            </Info>
        </Form>
    );
}
// note: button submit korar por async process ta cholbe tokhn barbar submit e click korle loading state eprb hobe tai eta atkate disable korlam loading true hoye gele mane process cholce r false hole kaj korbe totokhone application e redirect korai dibo
