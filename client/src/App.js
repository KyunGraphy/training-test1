import { useState } from 'react';
import './App.css';
import Navigation from './Components/Main/Navigation'

function App() {
  const [login, setLogin] = useState(true)

  if (login) {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  } else {
    // return(
    //   <Login />
    // )
  }
}

export default App;
