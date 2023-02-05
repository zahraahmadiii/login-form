import React from 'react'
import "./style.css"

function SubmitButton({value,onClick}) {
  return (
    <button className="submitBtn" type="submit" onClick={onClick} >{value}</button>
  )
}

export default SubmitButton