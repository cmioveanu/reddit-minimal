import { createSlice } from '@reduxjs/toolkit';






const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: { 
       subReddits: [],
       activeSubreddit: "/r/Home/"
    },
    reducers: {
        addSubreddit: (state, action) => {
            state.subReddits.push(action.payload);
        },

        changeActiveSubreddit: (state, action) => {
            state.activeSubreddit = action.payload;
        }
    }
});

export const {addSubreddit, changeActiveSubreddit} = subredditsSlice.actions;
export default subredditsSlice.reducer;


/* when the application runs ->
    add every subreddit to the store ->
        add every subreddit to the subreddits category so they can be used as filters */