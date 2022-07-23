import { useState } from "react";
import "./App.css";

import Navigation from "./Components/MainPage/Navigation";
import Login from "./Components/Auth/Login";
import { Route, Routes,Link } from "react-router-dom";
import Main from "./Main";
import Registration from "./Components/Auth/Registertration";
import Detail from "./Detail";
import Profile from "./Components/ProfilePage/Profile";
import ChooseUser from "./Components/MainPage/ChooseUser";

function App() {
  const [login, setLogin] = useState(true);

  const prjAPI = "http://localhost:3004/projects";


  if (login) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Main prjAPI={prjAPI} />} />
          <Route path="/detail/:projectsId" element={<Detail prjAPI={prjAPI} />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path='/ChooseUser' element={<ChooseUser />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Registration />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
