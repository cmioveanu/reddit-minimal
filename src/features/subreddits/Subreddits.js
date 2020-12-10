import React from 'react';
import styles from './subreddits.module.css';

import { Link } from 'react-router-dom';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSubreddits } from '../../app/Reddit';
import { addSubreddit, changeActiveSubreddit } from './subredditsSlice';




export const Subreddits = (props) => {
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
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
    }), [dispatch]);


    return (
        <section className={styles.subreddits}>
            <ul>
                {subReddits.map(item => (
                    <Link to="/" key={item.id}>
                        <li 
                            onClick={() => dispatch(changeActiveSubreddit(item.url))}
                            className={activeSub === item.url ? styles.activeSub : undefined}
                        >
                            <img src={item.icon} onError={(e) => e.target.src = props.logo} />
                            {item.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    );
}


/*
const images = document.querySelectorAll('.subreddits ul li img');

images.forEach(image => {
    !image.complete ? image.src = "../../assets/images/redditLogo.png" : image.src = "../../assets/images/redditLogo.png";
}); */