import { useState } from "react";
import "./App.css";
import Navigation from "./Components/Main/Navigation";
import Login from "./Components/Main/Login";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Registration from "./Components/Main/Registertration";
import Overview from "./Components/Detail/Overview";
import Detail from "./Detail";

function App() {
  const [login, setLogin] = useState(true);

  const prjAPI = "http://localhost:3004/projects";

  if (login) {
    return (
      <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Main prjAPI={prjAPI} />} />
          <Route path="/detail/:projectsId" element={<Detail prjAPI={prjAPI} />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    );
  }
}

export default App;
