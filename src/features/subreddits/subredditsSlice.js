import React from 'react';
import { createSlice } from '@reduxjs/toolkit';






const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: {
        value: 1, 
    },
    reducers: {
        addSubreddit: state => {
            state.value += 1;
          }
    }
});

export const {addSubreddit} = subredditsSlice.actions;
export default subredditsSlice.reducer;


/* when the application runs ->
    add every subreddit to the store ->
        add every subreddit to the subreddits category so they can be used as filters */