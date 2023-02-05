import React, { useState } from "react";
import Input from "../Input";
import "./style.css";
import SubmitButton from "../submitButton";
import { AiFillEyeInvisible } from "react-icons/Ai";
import { AiFillEye } from "react-icons/Ai";
import data from "../../assets/iranstates.json";
function Register() {
  const [showPass, setShowPass] = useState("password");
  const [education, setEducation] = useState("");
  const [city, setCity] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <h2>رایگان ثبت نام کنید</h2>
      <form onSubmit={handleSubmit}>
        <div className="fullName">
          <Input type="text" placeholder="نام" width="w-48" />
          <Input type="text" placeholder="نام خانوادگی" width="w-48" />
        </div>

        <Input type="email" placeholder="پست الکترونیک" />
        <div className="pos-relative">
          <Input type={showPass} placeholder="کلمه عبور" />
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
        <select onChange={(e) => setEducation(e.target.value)}>
          <option value="">تحصیلات</option>
          <option value="karshenasi">کارشناسی</option>
          <option value="karshenasiArshad">کارشناسی ارشد</option>
          <option value="dr">دکتری</option>
        </select>
        {education !== "" && <Input placeholder="محل تحصیل" type="text" />}
        <select onChange={(e) => setCity(data[`${e.target.value}`])}>
          <option>استان</option>
          {Object.keys(data).map((state) => (
            <option value={state} key={state}>
              {state}
            </option>
          ))}
        </select>
        <select>
          {city.length > 0 ? (
            city.map((_city) => (
              <option value={_city} key={_city}>
                {_city}
              </option>
            ))
          ) : (
            <option>شهر</option>
          )}
        </select>
        <SubmitButton value="ثبت نام" onClick={handleSubmit}/>
      </form>
    </div>
  );
}

export default Register;
