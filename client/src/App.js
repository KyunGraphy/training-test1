import { useState } from 'react';
import './App.css';
import Navigation from './Components/Main/Navigation'
import Login from './Components/Main/Login';

function App() {
  const [login, setLogin] = useState(false)

  if (login) {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  } else {
     return(
       <Login />
     )
  }
}

export default App;
