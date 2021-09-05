import { useEffect, useState } from 'react';
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


const [random, setRandom] = useState([])
const [formStateMinMax, setFormStateMinMax] = useState(initialStateMinMax)
const [inputMinMax, setInputMinMax] = useState(initialStateMinMax)
const [loggedIn, setLoggedIn] = useState(loginState)

const url = "http://localhost:8000/nftmarketplace"

    useEffect(() => {
        fetch(url).then(res => res.json()).then(res=>setRandom(res)).catch(console.error)
    },[])


  return (
    <div className = "App" >
      <DataContext.Provider value = {{ formStateMinMax,
                                      setFormStateMinMax,
                                      inputMinMax,
                                      setInputMinMax,
                                      initialStateMinMax,
                                      loggedIn,
                                      setLoggedIn,
                                      random,
                                      setRandom}}>
        <Landing/>
      </DataContext.Provider>
    </div>
  );
}
// pat access

export default App;
