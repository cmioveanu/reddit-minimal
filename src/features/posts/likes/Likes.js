import React from 'react';

import styles from './Likes.module.css';
import { upArrow, downArrow } from '../../../app/utils';

export const Likes = (props) => {
    const onUpArrowClicked = (e) => {
        if (e.target.firstChild.getAttribute("fill") === "black") {         //set the arrow color, revert the opposite arrow color and change the votes number color
            e.target.firstChild.setAttribute("fill", "green");
            e.target.parentNode.lastChild.firstChild.setAttribute("fill", "black");
            e.target.parentNode.children[1].style.color = "green";
        } else {
            e.target.firstChild.setAttribute("fill", "black");              //set the arrow color and revert the votes number color
            e.target.parentNode.children[1].style.color = "black";
        }
    }

    const onDownArrowClicked = (e) => {
        if (e.target.firstChild.getAttribute("fill") === "black") {         //set the arrow color, revert the opposite arrow color and change the votes number color
            e.target.firstChild.setAttribute("fill", "red");
            e.target.parentNode.firstChild.firstChild.setAttribute("fill", "black");
            e.target.parentNode.children[1].style.color = "red";
        } else {
            e.target.firstChild.setAttribute("fill", "black");              //set the arrow color and revert the votes number color
            e.target.parentNode.children[1].style.color = "black";
        }
    }
    
    return (
        <div className={styles.likes}>
            <div onClick={onUpArrowClicked} className={styles.upVotesButton}>{upArrow}</div>
            <p>{props.postUps >= 1000 ? (Math.round(props.postUps / 1000 * 10) / 10 + "k") : props.postUps}</p>
            <div onClick={onDownArrowClicked} className={styles.upVotesButton}>{downArrow}</div>
        </div>
    );
}