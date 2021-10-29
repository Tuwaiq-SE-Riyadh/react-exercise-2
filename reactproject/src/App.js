import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ItemList from "./components/ItemList";
import Search from "./components/Search";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => setList(response.data.results))
      .catch((error) => console.log(error));
  },[]);
  console.log(list)
  return (
    <div>
      <div className="Header">
          <h1 className="header1"> Rick and Morty</h1>
      </div>
      <Search list={list} setList={setList}/>
      <div className="itemsList">
          <ItemList list={list} setList={setList}/>
      </div>
    </div>
  );
}

export default App;

