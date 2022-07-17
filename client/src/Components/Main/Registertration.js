import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import axios from "axios";
function Registration() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
     e.preventDefault();
     setLogin(!Login)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)

  } 

  const handlePhone = (e) => {
    setPhone(e.target.value)

  } 

  const handleFName = (e) => {
    setFName(e.target.value)
  } 

  const handleLName = (e) => {
    setLName(e.target.value)
  } 

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({fname,lname,email,password,phone})

    axios.post('http://localhost:3004/Register',{
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      phone: phone,

    // })
    // .then(result=>{
    //   console.log(result)
    // })
    // .catch(error=>{
    //   console.log(error)
    })
  }

  function handleClick() {
     setLogin(!login);
  }

  return (
    <>
      <div>
        {" "}
        {login ? (
          <form onSubmit={handleFormSubmit}>
            <h3>Register</h3>

            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                value={fname}
                title = " Must be input First Name"
                className="form-control"
                placeholder="Enter First Name"
                name="name"
                onChange={handleFName}
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                value={lname}
                className="form-control"
                title = " Must be input Last Name"
                placeholder="Enter Last Name"
                name="name"
                onChange={handleLName}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Must be input email"
                className="form-control"
                placeholder="Enter email"
                onChange={handleEmail}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                className="form-control"
                placeholder="Enter password"
                onChange={handlePassword}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone No.</label>
              <input
                type="Phone"
                value={phone}
                className="form-control"
                title = " Must be input Phone"
                placeholder="Enter contact no"
                onChange={handlePhone}
                required
              />
            </div>

            <button onClick={handleApi} type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
            <p onClick={handleClick} className="forgot-password text-right">
              Already registered log in?
            </p>

          </form>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default Registration;
