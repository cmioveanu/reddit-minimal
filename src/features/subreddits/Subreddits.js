import React from 'react';
import styles from './subreddits.module.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSubreddits } from '../../app/Reddit';
import { addSubreddit } from './subredditsSlice';


export const Subreddits = () => {
    const subReddits = useSelector(state => state.subreddits);

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
        <aside>
            <ul>
            {subReddits.map(item => (
                <li key={item.id}>
                    <img src={item.icon} />
                    {item.name}
                </li>
            ))}
            </ul>
        </aside>
    );
}