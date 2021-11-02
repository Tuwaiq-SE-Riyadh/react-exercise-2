//import logo from './logo.svg';
import Hero from "./components/Hero.js"
import SearchBar from "./components/SearchBar.js"
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [list, setList] = useState([]);
  
  const names = () => {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((response) => setList(response.data))
      .catch((error) => console.log(error));
      //console.log(response.data)
  };

  return (
    <div className="App" style={{  //https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/
      backgroundImage: `url("./images/breaking-bad-4.jpg")`,
   //  background:
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <Hero />
      <SearchBar />
    <button onClick={names}> show </button>

{list.map((element, index) => {
  if(element.img){
    return <img id="AppImg" src={element.img}/>
  }
  if (element.name) {
    return <p> {element.name}</p>;
  }
  
})}
    </div>
  );
}

export default App;
