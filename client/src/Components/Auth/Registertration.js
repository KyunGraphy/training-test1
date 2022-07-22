import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const REGISTER_URL = "/user/register";

const Registration = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [userName, setUser] = useState("");
  const [email, SetEmail] = useState("");
  const [phoneNumber, SetPhone] = useState("");
  const [firstname, SetFname] = useState("");
  const [lastname, SetLname] = useState("");
  const [userPassword, SetPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userName, userPassword, phoneNumber, firstname, lastname, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ userName, userPassword ,firstname, lastname,email ,phoneNumber}),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      //clear state and controlled inputs
      setUser("");
      SetPwd("");
      SetEmail("");
      SetFname("");
      SetLname("");
      SetPhone("");

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <div className="container">
      <div className="forms">
        <div className="form login">
          <span className="title">Register</span>
          <form action="#">
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter user name"
                required
                id="user"
                ref={userRef}
                autoComplete="off"
                value={userName}
                onChange={(e) => setUser(e.target.value)}
              ></input>
              <i className="uil uil-user"></i>
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter first name"
                required
                id="fname"
                autoComplete="off"
                value={firstname}
                onChange={(e) => SetFname(e.target.value)}
              ></input>
              <i className="uil uil-user-plus"></i>
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter last name"
                required
                id="lname"
                value={lastname}
                autoComplete="off"
                onChange={(e) => SetLname(e.target.value)}
              ></input>
              <i class="uil uil-user-minus"></i>
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter email"
                required
                id="email"
                value={email}
                autoComplete="off"
                onChange={(e) => SetEmail(e.target.value)}
              ></input>
              <i class="uil uil-envelope icon"></i>
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Enter password"
                required
                id="password"
                value={userPassword}
                autoComplete="off"
                onChange={(e) => SetPwd(e.target.value)}
              ></input>
              <i className="uil uil-lock icon"></i>
            </div>

            <div className="input-field">
              <input
                type="text"
                placeholder="Enter your phone"
                required
                id="phone"
                value={phoneNumber}
                autoComplete="off"
                onChange={(e) => SetPhone(e.target.value)}
              ></input>
              <i className="uil uil-phone"></i>
            </div>

            <div className="input-field button">
              <Link to="/Login">
                <input type="button" value="Register"></input>
              </Link>
            </div>
          </form>

          <div className="login-signup">
            <span className="text">
              Not a member ?{" "}
              <a href="/Login" className="text signup-text">
                {" "}
                Log in{" "}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
