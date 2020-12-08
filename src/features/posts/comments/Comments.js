import React from 'react';
import { useState, useEffect } from 'react';

import styles from './Comments.module.css';

import { getPostComments } from '../../../app/Reddit';
import { dateCalculator } from '../postFooter/PostFooter';

export const Comments = (props) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getPostComments(props.permalink)
            .then(jsonComments => setComments(
                jsonComments.map(comment => (

                    <div className={styles.comment} key={comment.id}>
                        <div className={styles.commentHeader}>
                            <p className={styles.commentAuthor}>{comment.author}</p>
                            <p className={styles.commentDate}>{dateCalculator(comment.created_utc)}</p>
                        </div>
                        <p>{comment.body}</p>
                        {console.log(comment)}
                    </div>

                ))));

    }, [props.permalink]);

    return (
        <div id={props.id} className={styles.isNotShown}>
            {comments}
        </div>
    );
};

//{console.log(JSON.stringify(comment))}