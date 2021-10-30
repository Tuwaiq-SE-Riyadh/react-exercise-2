import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import SearchCharacter from './SearchCharacter';
import Header from './Header';
// import Details from './Details';

function App() {

  const [list, setList] = useState([]);

  // const getPostData = (searchInput) => {
  //     axios
  //       .get(`https://rickandmortyapi.com/api/character/${searchInput}`)
  //       .then((response) => setList(response.data.results))
  //       .catch((error) => console.log(error));     
  // };

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => setList(response.data.results))
      .catch((error) => console.log(error));

  })
  return (
    <div className="title">
      <Header/>
      <SearchCharacter setList={setList} />
      <div className="character-result">
        <div id="character">
          {/* <div className="character-item">
          <div className="character-img"> */}

          {list.map((element, index) => {

            return (
              <>
                <Card element={element} />
                {/* <Details detail={setList}/> */}
              </>
            )
          }
          )
          }
            </div>
      </div>
      </div>


  );
}

export default App;
