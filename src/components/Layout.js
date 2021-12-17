import React from 'react';
import layout from '../styles/Layout.module.css';
import Nav from './Nav';

export default function Layout({ children }) {
    return (
        <main className={layout.main}>
            <Nav />

            <div className={layout.container}>{children}</div>
        </main>
    );
}
