import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from '../lib/react-router-dom';
import Home from '../components/Home';
import User from '../components/User/index';
import Login from '../components/Login';
import Protected from '../components/Protected';
import Profile from '../components/Profile';

function Routes() {
  return(
    <Router>
      <div>
        <p style={{display: 'flex', justifyContent: 'space-around'}}>
          <Link to='/home'>home</Link>
          <Link to='/user'>user</Link>
          <Link to='/profile'>profile</Link>
        </p>
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