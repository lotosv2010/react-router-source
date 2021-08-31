import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from '../lib/react-router-dom';
import Home from '../components/Home';
import User from '../components/User/index';
import Login from '../components/Login';
import Protected from '../components/Protected';
import Profile from '../components/Profile';
import NavHeader from '../components/NavHeader';

function Routes() {
  return(
    <Router>
      <div>
        <ul>
          <NavHeader title="Welcome React Router" />
          <li>
            <NavLink
              to='/home'
              activeClassName='active'
              className='strong'
              style={{textDecoration: 'underline', cursor: 'pointer'}}
              activeStyle={{color: 'red'}}
            >home</NavLink></li>
          <li>
            <NavLink
              to='/user'
              style={{textDecoration: 'underline', cursor: 'pointer'}}
              activeStyle={{color: 'red'}}
            >user</NavLink></li>
          <li>
            <NavLink
              to='/profile'
              style={{textDecoration: 'underline', cursor: 'pointer'}}
              activeStyle={{color: 'red'}}
            >profile</NavLink></li>
        </ul>
        <Switch>
          <Route path='/user' exact={false} component={User} />
          <Route path='/home' exact={true} component={Home} />
          <Route path='/login' exact={true} component={Login} />
          <Protected path='/profile' exact={true} component={Profile} />
          <Redirect from='/' to='/home' />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes;