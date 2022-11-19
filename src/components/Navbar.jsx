import React from 'react';
import styles from "./Navbar.module.css";

export function Navbar(props) {
    return (
        <nav className={styles.navigation}>
            <a href="/Users/Mereke/WebstormProjects/reactproj/public" className={styles.name}>
                Content Builder
            </a>
        </nav>
    );
}