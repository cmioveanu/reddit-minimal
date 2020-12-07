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

    const commentsIcon = <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        version="1.2"
        baseProfile="tiny"
        viewBox="0 0 24 24"
        class="icon-action"
        height="1.5rem"
        width="1.5rem"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1h-8.829l-.171.171v-.171h-3c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12m0-2h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3z"></path>
    </svg>;


    return (
        <section className={styles.posts}>
            {posts.map(post => (
                <section className={styles.post} key={post.id}>
                    <div className={styles.likes}>
                        {post.ups}
                    </div>
                    <div className={styles.postBody}>
                        <h2>{post.title}</h2>
                        <img src={post.url} onError={(e) => e.target.style.display = "none"} />
                        <footer>
                            <ul className={styles.postInfos}>
                                <li><span>{post.author}</span></li>
                                <li>{new Date(post.created).toString()}</li>
                                <li>{commentsIcon}<span>{post.num_comments}</span></li>
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