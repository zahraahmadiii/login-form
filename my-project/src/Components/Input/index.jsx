import React from 'react'
import "./style.css"
function Input({placeholder,type,width="w-100",onChange}) {

  return (

   <input placeholder={placeholder} type={type} className={`input ${width}`} onChange={onChange}/>
  )
}

export default Input;