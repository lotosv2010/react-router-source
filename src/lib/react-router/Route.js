import React, {Component} from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';

/**
 * todo:路由渲染的三种方式
 * 1.component，不能加逻辑
 * 2.render，render属性是一个函数，渲染函数的返回值
 * 3.children
 */
class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {
          context => {
            const location = context.location; // 拿到当前的地址信息
            const {component, computedMath, render} = this.props;
            // 用location和当前的Route的path进行匹配得到匹配的结果
            // todo:如果computedMath属性有值，说明Switch组件已经匹配过了，这里就不需要再匹配了
            const match = computedMath ?? matchPath(location.pathname, this.props)
            const props = {...context, location, match};
            let element
            if(!match) {
              return null
            } else {
              props.match = match
              if(component) {
                element = React.createElement(component, props)
              } else if(render) {
                element = render(props)
              } else {
                element = null
              }
            }
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