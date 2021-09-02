import React, {useEffect, useState} from 'react';
const UserDetail = (props: any) => {
  let user = props.location.state;
  const [state, setState] = useState<any>({});
  const getInfo = () => {
    if(!user) {
      const id = props.match.params.id;
      const usersStr: string = localStorage.getItem('users')|| '[]';
      const users: Array<any> = JSON.parse(usersStr);
      user = users.find((u) => u.id = id)
      console.log(user)
    }
    setState(user);
  }
  useEffect(() => {
    getInfo();
  }, [])
  return (
    <div> id: {state.id}, username: {state.name} </div>
  )
}
export default UserDetail