import React from 'react';
import styles from './Posts.module.css';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSubredditPosts } from '../../app/Reddit';


import { PostFooter } from './postFooter/PostFooter';



export const Posts = () => {
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const dispatch = useDispatch();

    const [posts, setPosts] = useState([]);

    useEffect(() => getSubredditPosts(activeSub)
        .then(response => {
            setPosts(response);
        }), [activeSub]);



    const [clicked, setClicked] = useState(true);

    const upArrow = <svg stroke="green"
        fill="black"
        aria-hidden="true"
        strokeWidth="0"
        version="1.2"
        baseProfile="tiny"
        viewBox="0 0 24 24"
        height="1.5rem"
        width="1.5rem"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115-1.17-1.169-1.17-3.073 0-4.242l7.121-7.121 7.121 7.121c1.17 1.169 1.17 3.073 0 4.242-1.094 1.095-2.979 1.14-4.121.115v4.764c0 1.654-1.346 3-3 3zm-1-12.586v9.586c0 .551.448 1 1 1s1-.449 1-1v-9.586l3.293 3.293c.379.378 1.035.378 1.414 0 .391-.391.391-1.023 0-1.414l-5.707-5.707-5.707 5.707c-.391.391-.391 1.023 0 1.414.379.378 1.035.378 1.414 0l3.293-3.293z"></path>
    </svg>

    const downArrow = <svg stroke="red"
        fill="black"
        aria-hidden="true"
        strokeWidth="0"
        version="1.2"
        baseProfile="tiny"
        viewBox="0 0 24 24"
        height="1.5rem"
        width="1.5rem"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.312l-7.121-7.121c-1.17-1.17-1.17-3.073 0-4.242 1.094-1.094 2.978-1.138 4.121-.115v-4.834c0-1.654 1.346-3 3-3s3 1.346 3 3v4.834c1.143-1.023 3.027-.979 4.121.115 1.17 1.169 1.17 3.072 0 4.242l-7.121 7.121zm-5-10.242c-.268 0-.518.104-.707.293-.391.39-.391 1.023 0 1.414l5.707 5.707 5.707-5.707c.391-.391.391-1.024 0-1.414-.379-.379-1.035-.379-1.414 0l-3.293 3.293v-9.656c0-.551-.448-1-1-1s-1 .449-1 1v9.656l-3.293-3.293c-.189-.189-.439-.293-.707-.293z"></path>
    </svg>

    const onUpArrowClicked = (e) => {
        if (e.target.firstChild.getAttribute("fill") === "black") {         //set the arrow color, revert the opposite other color and change the votes number color
            e.target.firstChild.setAttribute("fill", "green");
            e.target.parentNode.lastChild.firstChild.setAttribute("fill", "black");
            e.target.parentNode.children[1].style.color = "green";
        } else {
            e.target.firstChild.setAttribute("fill", "black");              //set the arrow color and revert the votes number color
            e.target.parentNode.children[1].style.color = "black";
        }
    }

    const onDownArrowClicked = (e) => {
        if (e.target.firstChild.getAttribute("fill") === "black") {         //set the arrow color, revert the opposite other color and change the votes number color
            e.target.firstChild.setAttribute("fill", "red");
            e.target.parentNode.firstChild.firstChild.setAttribute("fill", "black");
            e.target.parentNode.children[1].style.color = "red";
        } else {
            e.target.firstChild.setAttribute("fill", "black");              //set the arrow color and revert the votes number color
            e.target.parentNode.children[1].style.color = "black";
        }
    }

    return (
        <section className={styles.posts}>
            {posts.map(post => (
                <section className={styles.post} key={post.id}>
                    <div className={styles.likes}>
                        <div onClick={onUpArrowClicked}>{upArrow}</div>
                        <p>{post.ups >= 1000 ? (Math.round(post.ups/1000 * 10) / 10 + "k") : post.ups}</p>
                        <div onClick={onDownArrowClicked}>{downArrow}</div>
                    </div>

                    <div className={styles.postBody}>
                        <h2>{post.title}</h2>
                        <img src={post.url} onError={(e) => e.target.style.display = "none"} />
                        <PostFooter postId={post.id}
                            postAuthor={post.author}
                            postCreated={post.created_utc}
                            postPermalink={post.permalink}
                            postComments={post.num_comments} />
                    </div>
                </section>

            ))}
        </section>
    );
}