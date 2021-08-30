import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Home';
import User from '../components/User';

function Routes() {
  return(
    <Router>
      <div>
        <p style={{display: 'flex', justifyContent: 'space-around'}}>
          <Link to='/home'>home</Link>
          <Link to='/user'>user</Link>
        </p>
        <Switch>
          <Route path='/user' component={User} />
          <Route path='/home' exact={true} component={Home} />
          <Redirect from='/' to='/home' />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes;