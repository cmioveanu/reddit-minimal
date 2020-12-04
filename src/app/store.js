import { configureStore } from '@reduxjs/toolkit';
import searchBarSlice from '../features/header/searchBar/searchBarSlice';
import {postsSlice} from '../features/posts/postsSlice';
import subredditsSlice from '../features/subreddits/subredditsSlice';

export default configureStore({
  reducer: {
    search: searchBarSlice,
    posts: postsSlice,
    subreddits: subredditsSlice
  }
});
