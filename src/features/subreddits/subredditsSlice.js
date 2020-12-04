import { createSlice } from '@reduxjs/toolkit';






const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: [],
    reducers: {
        addSubreddit: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const {addSubreddit} = subredditsSlice.actions;
export default subredditsSlice.reducer;


/* when the application runs ->
    add every subreddit to the store ->
        add every subreddit to the subreddits category so they can be used as filters */