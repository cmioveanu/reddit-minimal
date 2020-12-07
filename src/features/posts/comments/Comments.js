import React from 'react';
import { useState, useEffect } from 'react';

import styles from './Comments.module.css';

import { getPostComments } from '../../../app/Reddit';

export const Comments = (props) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getPostComments(props.permalink)
            .then(jsonComments => setComments(
                jsonComments.map(comment => (

                    <div>
                        <div className={styles.comment}>
                            <p className={styles.commentAuthor}>{comment.author}</p>
                            <p>{comment.body}</p>
                        </div>
                    </div>

                ))));
            
    }, []);

    return (
        <div id={props.id} className={styles.isNotShown}>
            {comments}
        </div>
    );
};

//{console.log(JSON.stringify(comment))}