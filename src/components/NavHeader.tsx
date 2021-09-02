import React, { Component } from 'react'
import {withRouter} from '../lib/react-router-dom';

class NavHeader extends Component<any> {
  render() {
    return (
      <h1 style={{cursor: 'pointer'}} onClick={() => {
        this.props.history.push('/')
      }}>
        {this.props.title}
      </h1>
    )
  }
}
export default withRouter(NavHeader);