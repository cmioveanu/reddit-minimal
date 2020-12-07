import React from 'react';
import styles from './Header.module.css';

import {SearchBar} from './searchBar/SearchBar';

export const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <h1>Reddit<span>Minimal</span></h1>
            <SearchBar className={styles.searchBar}/>
        </header>
    );
}