import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Contentb from './component/Contentb'
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [list, setList] = useState([]);
  useEffect(() => {
    console.log("I am in jj useEffect")
      axios
        .get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=15f549e163353de0911dbd4759b4e337&language=en-US")
        .then((response) => setList(response.data.results))
        .catch((error) => console.log(error));
      
        
    },[]);
    
  console.log("i am in app")
  
  return (
  <>
    <Header setList={setList} />
  <Contentb list={list}/>

</>
  );
}

export default App;
