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

const [searchState, setSearchState] = ("")
const [formState, setFormState] = ("")
const [random, setRandom] = useState([])
const [collection, setCollection] = useState([])
const [formStateMinMax, setFormStateMinMax] = useState(initialStateMinMax)
const [inputMinMax, setInputMinMax] = useState(initialStateMinMax)
const [loggedIn, setLoggedIn] = useState(loginState)

const url = "http://localhost:8000/nftmarketplace/"
const collectUrl = "http://localhost:8000/nftmarketplace/collection"
console.log(random)
    useEffect(() => {
        fetch(url).then(res => res.json()).then(res=>setRandom(res)).catch(console.error)
    },[])
    useEffect(() => {
      fetch(collectUrl).then(res => res.json()).then(res=>setCollection(res)).catch(console.error)
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
                                      setRandom,
                                      collection,
                                      setCollection,
                                      searchState,
                                      setSearchState,
                                      formState,
                                      setFormState}}>
        <Landing/>
      </DataContext.Provider>
    </div>
  );
}
// pat access

export default App;
