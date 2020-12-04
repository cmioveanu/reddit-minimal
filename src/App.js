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
      <main>
        <Posts />
        <Subreddits />
      </main>
    </div>
  );
}

export default App;
