import React from 'react';

function SearchForm(props) {
    return (
        <div >
           <form className = "search">
               <input type = "text" placeholder = "Explore"/>
               <div>Search</div> 
              
           </form>
        </div>
    );
}

export default SearchForm;