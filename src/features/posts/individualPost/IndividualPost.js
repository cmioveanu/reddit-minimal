import React from 'react';
import styles from './IndividualPost.module.css';

import { useSelector, useDispatch } from 'react-redux';


import { PostFooter } from '../postFooter/PostFooter';
import { Likes } from '../likes/Likes';


export const IndividualPost = () => {
    const posts = useSelector(state => state.posts);
    const activePostId = useSelector(state => state.individualPostId);

    const selectedPost = posts.filter(post => post.name === activePostId);

    return (
        <section className={styles.posts}>
            {selectedPost.map(post => (

                <section className={styles.post} key={post.id}>
                    <Likes postUps={post.ups} />

                    <div className={styles.postBody}>
                            <h2>{post.title}</h2>
                            <p>{post.selftext}</p>
                            <img src={post.url} onError={(e) => e.target.style.display = "none"} />

                        <PostFooter postId={post.id}
                            postAuthor={post.author}
                            postCreated={post.created_utc}
                            postPermalink={post.permalink}
                            postComments={post.num_comments}
                            visible={true}
                        />
                    </div>
                </section>

            ))}
        </section>
    );
}