import { useState } from "react";
import "./App.css";
import Navigation from "./Components/Main/Navigation";
import Login from "./Components/Main/Login";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Detail from "./Detail";

function App() {
  const [login, setLogin] = useState(true);

  const prjAPI = "http://localhost:3004/projects";

  if (login) {
    return (
      <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Main prjAPI={prjAPI} />}/>
          <Route path="/detail" element={<Detail />}/>
        </Routes>
      </div>
    );
  } else {
    return <Login />;
  }
}

export default App;
