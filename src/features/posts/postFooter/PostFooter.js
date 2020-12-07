import React from 'react';
import {useState} from 'react';

import { Comments } from '../comments/Comments';

import styles from './PostFooter.module.css';

export const PostFooter = (props) => {
    const [active, setActive] = useState(false);

    const commentsIcon = <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        version="1.2"
        baseProfile="tiny"
        viewBox="0 0 24 24"
        className="icon-action"
        height="1.5rem"
        width="1.5rem"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1h-8.829l-.171.171v-.171h-3c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12m0-2h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3z"></path>
    </svg>;

    const onCommentsClicked = () => {
        const postComments = document.getElementById(props.postId);
        if(active) {
            postComments.style.display = "none";
            setActive(false);
        } else {
            postComments.style.display = "block";
            setActive(true);
        }
        

    }

    return (
        <footer>
            <ul className={styles.postInfos}>
                <li><span>{props.postAuthor}</span></li>
                <li>{new Date(props.postCreated).toString()}</li>
                <li onClick={onCommentsClicked}>{commentsIcon}<span>{props.postComments}</span></li>
            </ul>
            <Comments permalink={props.postPermalink} id={props.postId} />
        </footer>
    )
        ;
};