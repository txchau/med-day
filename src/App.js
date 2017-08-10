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

import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import { ProjectList, ProjectEdit, ProjectCreate } from './lists/ProjectList.js';
import { PatientList } from './lists/PatientList.js';

const history = createBrowserHistory();
  
class App extends Component {

  // requireAuth(nextState, replace) {
  //   if (true) {
  //     replace({
  //       pathname: '/login'
  //     })
  //   }
  // }

  // render() {
  //   return (
  //     <BrowserRouter history={history}>
  //       <Switch>
  //         <Route exact path="/login" name="Login Page" component={Login} />
  //         <Route path="/" name="Home" component={Main} />
  //       </Switch>
  //     </BrowserRouter>
  //   );
  // }

    render() {
        return (
          <Admin title="Med Day" restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
            <Resource name="posts" list={ProjectList} edit={ProjectEdit} create={ProjectCreate} options={{ label: 'Projects' }} />
            <Resource name="users" list={PatientList} options={{ label: 'Patients' }} />
          </Admin>
        );
    }

}

export default App;