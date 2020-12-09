import React from 'react';
import styles from './Posts.module.css';
import {Link} from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { getSubredditPosts } from '../../app/Reddit';
import { PostFooter } from './postFooter/PostFooter';
import { Likes } from './likes/Likes';
import {changeActivePostId} from './individualPost/individualPostSlice';
import {changePosts} from './postsSlice';



export const Posts = () => {
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const activeSearchInput = useSelector(state => state.search);
    const posts = useSelector(state => state.posts);

    const dispatch = useDispatch();

    useEffect(() => getSubredditPosts(activeSub)
        .then(response => {
            dispatch(changePosts(response));
        }), [activeSub]);

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(activeSearchInput.toLowerCase()));     //select only posts that include the search bar value

    return (
        <section className={styles.posts}>
            {filteredPosts.map(post => (

                <section className={styles.post} key={post.id}>
                    <Likes postUps={post.ups} />

                    <div className={styles.postBody}>
                        <Link to={"/" + "individualPost" + post.name} onClick={() => dispatch(changeActivePostId(post.name))}>
                            <h2>{post.title}</h2>
                            <p>{post.selftext.substring(0, 600) + (post.selftext.length > 600 ? " [...]" : "")}</p>
                            {post.selftext.length > 600 ? <p className={styles.readMore}>read more...</p> : null}
                            <img src={post.url} onError={(e) => e.target.style.display = "none"} />
                        </Link>
                        <PostFooter postId={post.id}
                            postAuthor={post.author}
                            postCreated={post.created_utc}
                            postPermalink={post.permalink}
                            postComments={post.num_comments}
                        />
                    </div>
                </section>

            ))}
        </section>
    );
}