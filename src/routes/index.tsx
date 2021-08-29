import React from 'react';
import {HashRouter as Router, Route} from '../lib/react-router-dom';
import Home from '../components/Home';
import User from '../components/User';

function Routes() {
  return(
    <Router>
      <div>
        <Route path='/user' component={User} />
        <Route path='/home' exact={true} component={Home} />
      </div>
    </Router>
  )
}

export default Routes;