import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import './App.css';

// Views
import Login from './pages/Login.js'
import Main from './pages/Main.js'
import Page404 from './pages/Page404.js'
import Page500 from './pages/Page500.js'

const history = createBrowserHistory();
  
class App extends Component {

  requireAuth(nextState, replace) {
    if (true) {
      replace({
        pathname: '/login'
      })
    }
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route path="/" name="Home" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
