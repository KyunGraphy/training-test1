import { useState } from "react";
import "./App.css";
import Navigation from "./Components/Main/Navigation";
// import Slogan from "./Components/Main/Slogan";
import Login from "./Components/Main/Login";
// import ProjectReel from "./Components/Main/ProjectReel";
// import Footer from "./Components/Main/Footer";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Registration from "./Components/Main/Registertration";

function App() {
  const [login, setLogin] = useState(true);

  const prjAPI = "http://localhost:3004/projects";

  if (login) {
    return (
      <div className="App">
        <Navigation />
        {/* <Slogan />
        <ProjectReel prjAPI={prjAPI} />
        <Footer /> */}
        <Routes>
          <Route path="/" element={<Main prjAPI={prjAPI} />}/>
        </Routes>
      </div>
    );
  } else {
    return(
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
   )
  }
}

export default App;
