import React from 'react';
import {Router} from 'react-router';
import {createHashHistory} from '../history';

const HashRouter = (props) => {
  const history = createHashHistory();
  const {children} = props;
  return <Router history={history} children={children} />
}

export default HashRouter;