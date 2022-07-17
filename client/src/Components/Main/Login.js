import React from "react";
import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Log.css";



import ChooseUser from "./ChooseUser";
import Registration from "./Registertration";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [home, setHome] = useState(true);

    function handleFormSubmit(e) {
       e.preventDefault();
       setHome(!home)
    }

    const handleEmail = (e) => {
      setEmail(e.target.value)

    } 
    const handlePassword = (e) => {
      setPassword(e.target.value)
    }

    const handleApi = () => {
      console.log({email,password})
      axios.post('http://localhost:3002/login',{
        email: email,
        password: password,
      // })
      // .then(result=>{
      //   console.log(result)
      // })
      // .catch(error=>{
      //   console.log(error)
       })
    }
  return (
    <div>
      <div>
        <div>
          {home ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Log In</h3>
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

              <button onClick={handleApi} type="submit" className="btn btn-dark btn-lg btn-block">
                Login
              </button>
            </form>
          ) : (
            <ChooseUser />
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
