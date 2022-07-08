import { useState } from 'react';
import './App.css';
import Navigation from './Components/Main/Navigation'
import Slogan from './Components/Main/Slogan'
import Login from './Components/Main/Login';

function App() {
  const [login, setLogin] = useState(true)

  if (login) {
    return (
      <div className="App">
        <Navigation />
        <Slogan />
      </div>
    );
  } else {
     return(
       <Login />
     )
  }
}

export default App;
