import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function SearchCharacter({setList}){

    const [text, setText] = useState("");

   const getPostData = (searchInputTxt) => {
       console.log(searchInputTxt);
        axios
          .get(`https://rickandmortyapi.com/api/character/?name=${searchInputTxt}`)
          .then((response) => setList(response.data.results))
          .catch((error) => console.log(error)); 
    }

    const setTxt = (e) => {

        let s=e.target.value;
        setText(s)
        
    }

    const Searching = () => {

        getPostData(text)

    }

    return (

     <div>
         <input type="text" onChange={setTxt} />
         <button type="button" onClick={Searching}>Search</button> 
     </div>

    )
}

export default SearchCharacter;