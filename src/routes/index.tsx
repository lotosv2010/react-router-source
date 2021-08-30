import React from 'react';
import {HashRouter as Router, Route, Switch} from '../lib/react-router-dom';
import Home from '../components/Home';
import User from '../components/User';

function Routes() {
  return(
    <Router>
      <div>
        <Switch>
          <Route path='/user' component={User} />
          <Route path='/home' exact={true} component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes;