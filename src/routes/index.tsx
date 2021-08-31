import React, { /*Suspense, lazy*/ }from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from '../lib/react-router-dom';
import Home from '../components/Home';
import User from '../components/User/index';
import Login from '../components/Login';
import Protected from '../components/Protected';
import Profile from '../components/Profile';
import NavHeader from '../components/NavHeader';

/** 
 * todo:路由的三种渲染方式
 * 1.component，不能加逻辑
 * 2.render属性是一个函数，渲染函数的返回值
 * 3.children
 */

/** 
 * todo:动态路由
 * 动态路由可以让我们实现按需加载组件，从而应用初始化的时候
 * React.lazy 接收一个函数，这个函数内部使用import动态加载组件，返回一个Promise
 * Promise 会 resolve 一个默认导出的React 组件
 */

function Suspense(props: any) {
  return props.children ? props.children : props.fallback;
}

function lazy (load: Function) {
  return class extends React.Component {
    state = {Component: null}
    componentDidMount() {
      load().then((result: any) => {
        this.setState({Component: result.default || result});
      })
    }
    render() {
      const {Component}: any = this.state;
      return Component? <Component {...this.props}/> : null
    }
  }
}

 const LazyPost = lazy(() => import('../components/Post'));
 const Loading = () => (<span>loading</span>);

 const Post = () => {
  return (
    <Suspense fallback={<Loading />}>
      <LazyPost />
    </Suspense>
  )
}

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
          <li>
            <NavLink
              to='/post/title'
              style={{textDecoration: 'underline'}}
              activeStyle={{color: 'red'}}
            >post</NavLink></li>
        </ul>
        <Switch>
          <Route path='/user' exact={false} component={User} />
          <Route path='/home' exact={true} children={() => <Home />} />
          <Route path='/login' exact={true} component={Login} />
          <Route path='/post/:title' exact={true} component={Post} />
          <Protected path='/profile' exact={true} component={Profile} />
          <Redirect from='/' to='/home' />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes;