import './App.css';
import{BrowserRouter, Route} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import React from 'react';
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

import Header from '../components/Header';
import {Grid} from "../elements";

function App() {
  return (
   <React.Fragment>
     <Grid>
     <Header></Header>
     <ConnectedRouter history={history}>
      <Route path="/" exact component={PostList} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Signup" exact component={Signup}/>
     </ConnectedRouter>
     
     </Grid>
   </React.Fragment>
  );
}

export default App;
