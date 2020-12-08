import React from 'react';
import styles from './Header.module.css';

import {useDispatch} from 'react-redux';
import {changeActiveSubreddit } from '../subreddits/subredditsSlice';

import {SearchBar} from './searchBar/SearchBar';

export const Header = () => {
    const dispatch = useDispatch();

    const onTitleClicked = () => {
        dispatch(changeActiveSubreddit("/r/Home/"));
    }

    return (
        <header className={styles.mainHeader}>
            <h1 onClick={onTitleClicked}>Reddit<span>Minimal</span></h1>
            <SearchBar className={styles.searchBar}/>
        </header>
    );
}