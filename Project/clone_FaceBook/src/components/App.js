import React from 'react';
import './Style/App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Sign from '../pages/Sign';
import PostList from '../pages/PostList';
import SideBar from './SideBar';
import Aside from './Aside';

function App() {
  return (
    <>
      <div style={{ height: '100vh' }}>
        <Switch>
          <Route path="/sign" exact>
            <Sign />
          </Route>
          <>
            <div className="app">
              <Header />
              <div className="app__body">
                <SideBar />
                <Switch>
                  <Route exact path="/">
                    <PostList />
                  </Route>
                </Switch>
                <Aside />
              </div>
            </div>
          </>
        </Switch>
      </div>
    </>
  );
}

export default App;
