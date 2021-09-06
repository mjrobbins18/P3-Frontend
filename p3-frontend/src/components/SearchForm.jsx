import React from 'react';

function SearchForm(props) {
    return (
        <div className = "search" >
           <form className = "search">
               <input type = "text" placeholder = "Explore"/>
               <div ><iframe id= "searchIcon" src="https://giphy.com/embed/0GsNMsRwDKKMjiwIe5" width="480" height="480" frameBorder="0"  allowFullScreen></iframe><p><a href="https://giphy.com/gifs/suspicious-suspect-magnifying-glass-0GsNMsRwDKKMjiwIe5"></a></p></div> 
              {/* <div><iframe iframe id= "searchIcon" src="https://giphy.com/embed/xGdvlOVSWaDvi" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/girl-contacts-xGdvlOVSWaDvi"></a></p></div> */}
              {/* <div><iframe id= "searchIcon" src="https://giphy.com/embed/6hNjR8FmVSd8Ol34gZ" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/gift-shopsmall-christmaspresents-6hNjR8FmVSd8Ol34gZ"></a></p></div> */}
           </form>
        </div>
    );
}

export default SearchForm;