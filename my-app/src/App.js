import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import List from './componts/List';
import NavBar from './componts/NavBar';
import HeaderSarsh from './componts/HeaderSarsh'

function App() {
const [page,setPage]=useState([])
const [bast,setbast]=useState("beef")
const[inputSearch,setinputSearch]=useState([])

  useEffect( () => {
     axios
     .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${bast}`)
     .then(function (response) {
      setPage(response.data.meals);
     })
    },
    [bast],
  );

  // {page.map((e,index)=>{
  //   return(
  //     <div className="main"> 
  //     <List setPage={setPage} />
  //     <div>
  //     <img src={e.strMealThumb}/> 
  //      <p>{e.strMeal} </p>
  //      <button>click </button>
  //     </div>
  //     </div>
  //   )
    
    
  // })}
  return (  


    <div class = "container">
      <NavBar/>
        <div class = "meal-wrapper">
      <HeaderSarsh inputSearch={inputSearch} setinputSearch={setinputSearch} setbast={setbast} />
      <List page={page}  setPage={setPage} />
    
    </div>   
    </div> 
  );
}

export default App;
