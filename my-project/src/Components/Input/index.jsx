import React from 'react'
import "./style.css"
function Input({placeholder,type,width="w-100"}) {

  return (

   <input placeholder={placeholder} type={type} className={`input ${width}`}/>
  )
}

export default Input;