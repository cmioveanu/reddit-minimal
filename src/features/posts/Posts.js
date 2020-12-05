import React from 'react';
import styles from './Posts.module.css';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSubredditPosts } from '../../app/Reddit';



export const Posts = () => {
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const dispatch = useDispatch();

    console.log(activeSub);

    const [posts, setPosts] = useState([]);
    

    useEffect(() => getSubredditPosts(activeSub)
        .then(response => {
            setPosts(response);
        }), [activeSub]);


    return (
        <section className={styles.posts}>
            {posts.map(post => (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.author}</p>
                </div>


            ))}
        </section>
    );
}