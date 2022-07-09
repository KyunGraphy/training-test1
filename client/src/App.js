import { useState } from 'react';
import './App.css';
import Navigation from './Components/Main/Navigation'
import Slogan from './Components/Main/Slogan'
import Login from './Components/Main/Login';
import ProjectReel from './Components/Main/ProjectReel';
import Footer from './Components/Main/Footer'


function App() {
  const [login, setLogin] = useState(true)

  const prjAPI = 'http://localhost:3004/projects'

  if (login) {
    return (
      <div className="App">
        <Navigation />
        <Slogan />
        <ProjectReel prjAPI={ prjAPI } />
        <Footer />
      </div>
    );
  } else {
     return(
       <Login />
     )
  }
}

export default App;
