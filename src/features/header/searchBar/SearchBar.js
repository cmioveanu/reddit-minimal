import React from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';

import styles from './SearchBar.module.css';

export const SearchBar = () => {
    const [search, setSearch] = useState("");
    const activeSubSliced = useSelector(state => state.subreddits.activeSubreddit).slice(3, -1);
    console.log(activeSubSliced);
    const onTextChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <input className={styles.searchBar}
            id="Search"
            value={search}
            placeholder={"Search posts in " + activeSubSliced}
            onChange={onTextChange}
        />
    );
};