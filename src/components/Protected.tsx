import React from 'react';
import {Route, Redirect} from '../lib/react-router-dom';
function Protected(props: any) {
  const {component: RouteComponent, path} = props
  return (
    // todo:逻辑，当用户登录了，就渲染Component，如果没有登录，就不渲染这个Component
    <div>
      <Route path={path} render={
        (routeProps: any) => {
          return localStorage.getItem('login') ? <RouteComponent {...routeProps} /> :
          <Redirect to={{pathname: '/login', state: {from: routeProps.location.pathname}}} />
        }
      } />
    </div>
  )
}
export default Protected