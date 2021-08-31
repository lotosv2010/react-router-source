import React from 'react';
import {Link} from '../../lib/react-router-dom';
const UserList = () => {
  const usersStr: string = localStorage.getItem('users')|| '[]';
  const users: Array<any> = JSON.parse(usersStr);
  return (
    <div>
      <ol>
        {
          users ? users.map((u, index) => {
            return (
              <li key={index}>
                <Link to={{pathname: `/user/detail/${u.id}`, state: u}}>{u.name}</Link>
              </li>
            )
          }) : <span style={{color: 'lightgray'}}>暂无数据</span>
        }
      </ol>
    </div>
  )
}
export default UserList;