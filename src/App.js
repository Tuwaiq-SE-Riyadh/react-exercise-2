import { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import AllCharacter from "./componants/AllCharacter";
import Search from "./componants/Search";


function App() {
  const [data, setData] = useState([]);
  const [copy, setCopy] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) =>{setData(response.data.results);
      setCopy(response.data.results)})
      .catch((error) => console.log(error));
      
      
  },[]);
  
  return(  
   <div id="page">
   <Search data={data} setData={setData} copy={copy}/>
   {/* <p>most searched characters</p> 
   <AllCharacter data={data}/>
   <hr/> */}
    <AllCharacter data={data}/>
   </div>
    
  
  );
 
}

export default App;

