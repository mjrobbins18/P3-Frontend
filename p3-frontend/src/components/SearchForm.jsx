import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { DataContext } from './DataContext';
import searchIcon from './Images/searchIcon.png'

function SearchForm(props) {

const {searchState, setSearchState, setRandom} = useContext(DataContext)
const history = useHistory()
let url = "https://nft-api-p3.herokuapp.com/nftmarketplace"
const [currentURL, setCurrentURL] = useState(url)


const handleSubmit = (event) => {
    event.preventDefault()
    getNFT(searchState)
    setSearchState("")
    history.push('/browse')     
 
}
const handleChange = (event) => {
    setSearchState(event.target.value)
    setCurrentURL(url.concat(`/name/${event.target.value}`))

}
function getNFT() {
    fetch(currentURL).then(res => res.json().then(res => {setRandom(res)}))
}


    return (
        <div >
           <form className = "search" onSubmit={handleSubmit}>
               
               <input onChange = { handleChange }
                      className = "searchBar"
                      value = {searchState} 
                      type = "text" 
                      placeholder = "Explore"/>
               <div>
                    <img className = "searchIcon" src = { searchIcon } alt = "searchIcon" type = "submit" onSubmit= { handleSubmit }/>
                </div> 
              
           </form>
        </div>
    );
}

export default SearchForm;