import { useEffect, useState } from 'react';
import './App.css';
import { DataContext } from './components/DataContext.jsx'
import Landing from './components/Landing';
import axios from 'axios';


function App() {

  const initialStateMinMax = {
    min: "",
    max: ""
}
const initialNftState = {
  name: "",
  image_url: "",
  description: "",
  price: ""
}
const initialUserState = {
  username: "",
  password: "",
  password2: ""
}
const loginRoute = "/login"


const [searchState, setSearchState] = useState("")
const [formState, setFormState] = useState("")
const [random, setRandom] = useState([])
const [collection, setCollection] = useState([])
const [formStateMinMax, setFormStateMinMax] = useState(initialStateMinMax)
const [inputMinMax, setInputMinMax] = useState(initialStateMinMax)
const [loggedIn, setLoggedIn] = useState(() => {
  const savedLogin = localStorage.getItem('loggedin')
  const loggedInLocally = JSON.parse(savedLogin)
  return loggedInLocally || ""
})
const [currentUser, setCurrentUser] = useState(() => {
  const savedUser = localStorage.getItem('username')
  return savedUser || ""
})
const [userInfo, setUserInfo] = useState([])
   
const [loginOrBuy, setLoginOrBuy] = useState(loginRoute)
const [loginUser, setLoginUser] = useState(initialUserState)
const [createNftState, setCreateNftState] = useState(initialNftState)
const [nftFormState, setNftFormState] = useState(initialNftState)
const [userState, setUserState] = useState(initialUserState)
const [userFormState, setUserFormState] = useState(initialUserState)
const [recent, setRecent] = useState([])
const url = "https://nft-api-p3.herokuapp.com/nftmarketplace/findnft"
const collectUrl = "https://nft-api-p3.herokuapp.com/nftmarketplace/collections"
const userUrl = `https://nft-api-p3.herokuapp.com/api/users/username/${currentUser}`
const recentUrl = `https://nft-api-p3.herokuapp.com/nftmarketplace/newfind`


console.log(random)
    useEffect(() => {
        fetch(url).then(res => res.json()).then(res=>setRandom(res)).catch(console.error)
    },[])
    useEffect(() => {
      fetch(collectUrl).then(res => res.json()).then(res=>setCollection(res)).catch(console.error)
  },[])

   useEffect(() =>{
       axios.get(userUrl)
       .then(res => setUserInfo(res.data))
       .catch(console.error)
   }, [])
   useEffect(() =>{
    axios.get(recentUrl)
    .then(res => setRecent(res.data))
    .catch(console.error)
}, [])
console.log(`userInfo ${userInfo}`)
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
                                      setFormState,
                                      userState,
                                      setUserState,
                                      userFormState,
                                      setUserFormState,
                                      createNftState,
                                      setCreateNftState,
                                      nftFormState,
                                      setNftFormState,
                                      initialUserState,
                                      initialNftState,
                                      loginUser,
                                      setLoginUser,
                                      loginOrBuy,
                                      setLoginOrBuy,
                                      currentUser,
                                      userInfo,
                                      setUserInfo,
                                      recent,
                                      userUrl
                                      }}>
        <Landing/>
      </DataContext.Provider>
    </div>
  );
}
// pat access

export default App;
