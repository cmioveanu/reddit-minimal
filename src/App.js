import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from './features/header/Header';
import { Posts } from './features/posts/Posts';
import { Subreddits } from './features/subreddits/Subreddits';

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
      <Subreddits />
    </div>
  );
}

export default App;
