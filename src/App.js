import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotMatch from './components/NotMatch/NotMatch';
import PostDetails from './components/PostDetails/PostDetails';
import Comment from './components/Comment/Comment';

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
     <Route path="/home">
       <Home/>
     </Route>
     <Route exact path="/">
     <Home/>
     </Route>
     <Route path="/post/:postId" >
     <PostDetails/>
     </Route>
     <Route path="/comment/:postId">
     <Comment/>
     </Route>

     <Route path="*">
      <NotMatch/>
     </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
