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
                <section className={styles.post}>
                    <div className={styles.likes}>
                        {post.ups}
                    </div>
                    <div className={styles.postBody}>
                        <h2>{post.title}</h2>
                        <img src={post.url} />
                        <footer>
                            <ul className={styles.postInfos}>
                                <li>{post.author}</li>
                                {console.log(typeof post.created.toString())}
                                <li>{new Date(post.created).toString()}</li>
                                <li>{post.num_comments}</li>
                                </ul>
                        </footer>
                    </div>
                </section>
//likes + like & dislike button, time posted, comment number, author profile photo, post image if any
//post.url



            ))}
        </section>
    );
}