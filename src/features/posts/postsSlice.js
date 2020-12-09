import {createSlice} from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        changePosts: (state, action) => state = action.payload
    }

});

export default postsSlice.reducer;
export const {changePosts} = postsSlice.actions;