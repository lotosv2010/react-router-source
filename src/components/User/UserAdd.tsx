import React, {Component, createRef} from 'react';
import { Prompt } from '../../lib/react-router-dom';
class UserAdd extends Component<any, any> {
  userRef: any;
  constructor(props: any) {
    super(props);
    this.state = {isBlocking: false}; // 是否阻止跳
    this.userRef = createRef();
  }
  handleChange = (event: any) => {
    this.setState({isBlocking: event.target.value.length > 0});
  }
  handleSubmit = (event: any) => {
    event.preventDefault();
    const name = this.userRef.current.value;
    this.setState({isBlocking: false}, () => {
      if(!name) return alert('请输入用户名');
      const users = JSON.parse(localStorage.getItem('users')||'[]') || [];
      const id = Math.floor(Math.random() * 1000000);
      const user = {name, id};
      localStorage.setItem('users', JSON.stringify([...users, user]));
      this.props.history.push(`/user/list`);
    })
  }
  render() {
    const {isBlocking} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <Prompt
          when={isBlocking}
          message={(location: any) => `请问您是否确认要离开此页面，跳转到${location.pathname}吗?`}
        />
        <p>
          用户名：
          <input
            ref={this.userRef}
            onChange={this.handleChange}
          />
        </p>
        <button type='submit'>add</button>
      </form>
    )
  }
}
export default UserAdd