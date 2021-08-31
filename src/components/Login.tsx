import React from 'react';

function Login(props: any) {
  const handleClick = () => {
    localStorage.setItem('login', 'true')
    if(props.location.state) {
      props.history.push(props.location.state.from)
    }
  }
  return (
    <button onClick={handleClick}>login</button>
  )
}
export default Login