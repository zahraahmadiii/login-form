import React from 'react'
import Input from '../Input';


 function Login() {
    
  return (
    <div>
      <h2>خوش آمدید</h2>

      <Input type="email" placeholder="پست الکترونیک"/>
      <Input type="password" placeholder="کلمه عبور"/>
    </div>
  )
}

export default Login;
