import { useState } from 'react';
import './App.css';
import { DataContext } from './components/DataContext.jsx'
import Landing from './components/Landing';


function App() {

  const initialStateMinMax = {
    min: "",
    max: ""
}
const loginState = {
  isLoggedIn: false,
  buyOrLogin: "/login"
}

const [formStateMinMax, setFormStateMinMax] = useState(initialStateMinMax)
const [inputMinMax, setInputMinMax] = useState(initialStateMinMax)
const [loggedIn, setLoggedIn] = useState(loginState)
  return (
    <div className = "App" >
      <DataContext.Provider value = {{ formStateMinMax,
                                      setFormStateMinMax,
                                      inputMinMax,
                                      setInputMinMax,
                                      initialStateMinMax,
                                      loggedIn,
                                      setLoggedIn}}>
        <Landing/>
      </DataContext.Provider>
    </div>
  );
}
// pat access

export default App;
