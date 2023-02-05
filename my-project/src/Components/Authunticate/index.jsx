import React from "react";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Register from "../Register";
import Login from "../Login";
import "./style.css";

function Authunticate() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(true);
  const handleShowLogIn = () => {
    setShowLogin(true);
    setShowRegister(false);
  };
  const handleShowRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  return (
    <div className="container">
      <div className="btn-container">
        <Button value="ورود" onClick={()=>handleShowLogIn()} background={showLogin ?"green":null}/>
        <Button value="ثبت نام" onClick={()=>handleShowRegister()} background={showRegister ?"green":null}/>
      </div>

      {showLogin && <Login />}
      {showRegister && <Register />}
    </div>
  );
}
export default Authunticate;
