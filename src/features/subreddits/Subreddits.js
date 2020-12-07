import React from 'react';
import styles from './subreddits.module.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSubreddits } from '../../app/Reddit';
import { addSubreddit, changeActiveSubreddit } from './subredditsSlice';


export const Subreddits = () => {
    const subReddits = useSelector(state => state.subreddits.subReddits);
    const dispatch = useDispatch();

    useEffect(() => getSubreddits().then(json => {
        json.forEach(item => dispatch(
            addSubreddit({
                name: item.display_name,
                url: item.url,
                id: item.id,
                icon: item.community_icon.split("?")[0],
            })));
    }), []);


    return (
        <aside className={styles.subreddits}>
            <ul>
                {subReddits.map(item => (
                    <li key={item.id}
                        onClick={() => dispatch(changeActiveSubreddit(item.url))}>
                        <img src={item.icon} />
                        {item.name}
                    </li>
                ))}
            </ul>
        </aside>
    );
}