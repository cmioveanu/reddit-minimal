import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux';

import logo from './logo.svg';
import redditLogo from './redditLogo.png';
import './App.css';

import { Header } from './features/header/Header';
import { Posts } from './features/posts/Posts';
import { IndividualPost } from './features/posts/individualPost/IndividualPost';
import { Subreddits } from './features/subreddits/Subreddits';

function App() {
  const activePost = useSelector(state => state.individualPostId)


  return (
    <Router>

      <div className="App">
        <Header />
        <main>

          <Switch>


            <Route exact path="/">
              <Posts />
            </Route>


          </Switch>

          <Subreddits logo={redditLogo} />
        </main>
      </div>

    </Router>
  );
}

export default App;
