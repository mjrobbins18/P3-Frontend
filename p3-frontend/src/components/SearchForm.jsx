import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { DataContext } from './DataContext';
import searchIcon from './Images/searchIcon.png'

function SearchForm(props) {

const {searchState, setSearchState, formState, setFormState} = useContext(DataContext)
const history = useHistory()

const handleSubmit = (event) => {

}
const handleChange = (event) => {

}



    return (
        <div >
           <form className = "search">
               <input type = "text" placeholder = "Explore"/>
               <div>
                    <img src = { searchIcon } alt = "searchIcon"/>
                </div> 
              
           </form>
        </div>
    );
}

export default SearchForm;