import React from 'react';
import styles from './Posts.module.css';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSubredditPosts } from '../../app/Reddit';


import {PostFooter} from './postFooter/PostFooter';



export const Posts = () => {
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const dispatch = useDispatch();

    const [posts, setPosts] = useState([]);

    useEffect(() => getSubredditPosts(activeSub)
        .then(response => {
            setPosts(response);
        }), [activeSub]);

    

    const [clicked, setClicked] = useState(true);

    

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
                        <PostFooter postId={post.id} postAuthor={post.author} postCreated={post.created} postPermalink={post.permalink} postComments={post.num_comments}/>
                    </div>
                </section>
                //likes + like & dislike button, time posted, comment number, author profile photo, post image if any
                //post.url



            ))}
        </section>
    );
}