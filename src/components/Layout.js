import React from 'react';
import layout from '../styles/Layout.module.css';

export default function Layout({ children }) {
    return (
        <main className={layout.main}>
            <div className={layout.container}>{children}</div>
        </main>
    );
}
