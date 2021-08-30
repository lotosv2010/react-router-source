import React, {Component} from 'react'
import RouterContext from './RouterContext'

class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {
          context => {
            const location = context.location // 拿到当前的地址信息
            const {component, path} = this.props
            // 用location和当前的Route的path进行匹配得到匹配的结果
            const match = location.pathname === path;
            const props = {...context, location, match};
            let element = match?React.createElement(component, props):null;
            return (
              <RouterContext.Provider value={props}>
                {element}
              </RouterContext.Provider>
            )
          }
        }
      </RouterContext.Consumer>
    )
  }
}
export default Route