import React from 'react';
import {Router} from '../react-router';
import {createBrowserHistory} from '../history';

const BrowserRouter = (props) => {
  const history = createBrowserHistory();
  const {children} = props;
  return <Router history={history} children={children} />
}

export default BrowserRouter;