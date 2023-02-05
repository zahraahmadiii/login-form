import React, { useState } from "react";
import Input from "../Input";
import SubmitButton from "../submitButton";
import { AiFillEyeInvisible } from "react-icons/Ai";
import { AiFillEye } from "react-icons/Ai";
import "./style.css";
function Login() {
  const [showPass, setShowPass] = useState("password");
  const [error, setError] = useState(false)
  const [logInPayload, setLogInPayload] = useState({
    email:"",
    password:""
  })
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(logInPayload.email=== "" && logInPayload.password===""){
      setError(true)
      return
    }
  }
  return (
    <div>
      <h2>خوش آمدید</h2>
    <form onSubmit={handleSubmit}>
    <Input type="email" placeholder="پست الکترونیک" 
    onChange={(e)=>
      setLogInPayload((prevState) => {
        return {
        ...prevState,
        email: e.target.value
        }
        })}
    />
      <div className="pos-relative">
        <Input type={showPass} placeholder="کلمه عبور" 
            onChange={(e)=>
              setLogInPayload((prevState) => {
                return {
                ...prevState,
                password: e.target.value
                }
                })}
        />
        {showPass === "password" && (
          <AiFillEyeInvisible
            className="eyeIcon"
            onClick={() => setShowPass("text")}
          />
        )}
        {showPass === "text" && (
          <AiFillEye
            className="eyeIcon"
            onClick={() => setShowPass("password")}
          />
        )}
      </div>
      {error && <p style={{color:"red"}}>فیلدهای مشخص شده را پر کنید</p>}
      <SubmitButton value="ورود" onClick={handleSubmit}/>
    </form>

    </div>
  );
}

export default Login;
