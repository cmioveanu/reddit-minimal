import React from 'react';
import {useState} from 'react';

import styles from './SearchBar.module.css';

export const SearchBar = () => {
    const [search, setSearch] = useState("");

    const onTextChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <input className={styles.searchBar}
            id="Search"
            value={search}
            placeholder="Search posts"
            onChange={onTextChange}
        />
    );
};