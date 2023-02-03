import React from 'react'
import Input from '../Input';
import "./style.css"
 function Register() {
    
  return (
    <div className='container'>
      <h2>رایگان  ثبت نام کنید</h2>

    <div className='fullName'>
      <Input type="text" placeholder="نام" width='w-48'/>
      <Input type="text" placeholder="نام خانوادگی" width='w-48'/>
    </div>

   
      <Input type="email" placeholder="پست الکترونیک"/>
      <Input type="password" placeholder="کلمه عبور"/>
   
      
      
     
    </div>
  )
}

export default Register;