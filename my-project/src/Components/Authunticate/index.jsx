import React from 'react'
import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import Register from '../Register';
import "./style.css"

 function Authunticate() {

    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(true)


  return (
   
    <div className='container'>
        <div className='btn-container'>
           <Button value="ورود"/>
          <Button value="ثبت نام"/>
        </div>

       {showLogin && <Login/>}
       {showRegister && <Register/>}

      

    </div>
    
  )
}
export default Authunticate;