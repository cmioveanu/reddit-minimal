
import React from 'react';
import styles from './IndividualPost.module.css';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {changePosts} from '../postsSlice';
import { getSubredditPosts } from '../../../app/Reddit';


import { PostFooter } from '../postFooter/PostFooter';
import { Likes } from '../likes/Likes';

export const IndividualPost = () => {
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const activePostId = useSelector(state => state.individualPostId);


    const dispatch = useDispatch();

    useEffect(() => getSubredditPosts(activeSub)
        .then(response => {
            dispatch(changePosts(response));
        }), [activeSub]);
    
    const posts = useSelector(state => state.posts);

    console.log(posts);
    console.log(activePostId);
    //const post = posts.filter(post => post.id === activePostId);
    const post = posts[0];



    return (
        <section className={styles.posts}>

                <section className={styles.post} key={post.id}>
                    <Likes postUps={post.ups} />

                    <div className={styles.postBody}>
                            <h2>{post.title}</h2>
                            <p>{post.selftext.substring(0, 600) + (post.selftext.length > 600 ? " [...]" : "")}</p>
                            {post.selftext.length > 600 ? <p className={styles.readMore}>read more...</p> : null}
                            <img src={post.url} onError={(e) => e.target.style.display = "none"} />

                        <PostFooter postId={post.id}
                            postAuthor={post.author}
                            postCreated={post.created_utc}
                            postPermalink={post.permalink}
                            postComments={post.num_comments}
                        />
                    </div>
                </section>

        </section>
    );
}