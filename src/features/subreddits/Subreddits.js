import React from 'react';
import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSubreddits } from '../../app/Reddit';
import { addSubreddit } from './subredditsSlice';

/*
let subreddits = [];

getSubreddits().then(json => {
     console.log(json);
    json.forEach(item => subreddits.push({
        name: item.display_name,
        url: item.url,
    }));
});
*/


export const Subreddits = () => {
    const subReddits = useSelector(state => state.subreddits.value);

    const dispatch = useDispatch();

    useEffect(() => dispatch(addSubreddit()), []);

    return (

        <p>{subReddits}</p>

    );
}