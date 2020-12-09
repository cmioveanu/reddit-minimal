import React from 'react';
import styles from './Posts.module.css';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { getSubredditPosts } from '../../app/Reddit';
import { PostFooter } from './postFooter/PostFooter';
import { Likes } from './likes/Likes';



export const Posts = () => {
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const activeSearchInput = useSelector(state => state.search);

    const [posts, setPosts] = useState([]);

    useEffect(() => getSubredditPosts(activeSub)
        .then(response => {
            setPosts(response);
        }), [activeSub]);

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(activeSearchInput.toLowerCase()));     //select only posts that include the search bar value

    return (
        <section className={styles.posts}>
            {filteredPosts.map(post => (
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

            ))}
        </section>
    );
}