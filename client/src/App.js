import { useState } from 'react';
import './App.css';
import Navigation from './Components/Main/Navigation'
import Slogan from './Components/Main/Slogan'
import Login from './Components/Main/Login';
import List from './Components/Main/List';

function App() {
  const [login, setLogin] = useState(true)

  const prjAPI = 'http://localhost:3004/projects'

  if (login) {
    return (
      <div className="App">
        <Navigation />
        <Slogan />
        <List prjAPI={ prjAPI } />
      </div>
    );
  } else {
     return(
       <Login />
     )
  }
}

export default App;
