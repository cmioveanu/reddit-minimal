import React from 'react';
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
                id: item.id
            })));
    }), []);



    return (
        <aside>
            {subReddits.map(item => <h2 key={item.id}>{item.name}</h2>)}
        </aside>
    );
}