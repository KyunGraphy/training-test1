import { useState } from 'react';
import './Components/Main/Log.css'
import Navigation from './Components/Main/Navigation'
import Slogan from './Components/Main/Slogan'
import Login from './Components/Main/Login';
import ProjectReel from './Components/Main/ProjectReel';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Main/Registertration';
import Footer from './Components/Main/Footer';

function Regis() {
    const [login, setLogin] = useState(true)
  
    const prjAPI = 'http://localhost:3004/projects'
  
    if (login) {
      return (
        <div className="App">
          <Navigation />
          <Slogan />
          <ProjectReel prjAPI={ prjAPI } />
          <Footer></Footer>
        </div>
      );
    }
  }
  
  export default Regis;