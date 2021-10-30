import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import AllShow from "./components/AllShow"
import ActionShow from "./components/ActionShow"
import ComedyShow from "./components/ComedyShow"
import RomanceShow from "./components/RomanceShow"
function App() {
  const [allList, setAllList] = useState([]);
  let arr1 = []
  const getAll = () => {
    console.log(arr1);
    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => setAllList(response.data))
      .catch((error) => console.log(error));
  };
  const getAction = () => {
    console.log(arr1);
    axios
      .get("https://api.tvmaze.com/shows")
      .then(function(response){
        for (let i = 0; i < response.data.length; i++) {
          for (let j = 0; j < 5; j++) {
            if(response.data[i].genres[j]==="Action"){
                arr1.push(response.data[i]) 
            }
          }

        }
        return setAllList(arr1)
      })
      .catch((error) => console.log(error));
  };
  const getComedy = () => {
    console.log(arr1);
    axios
      .get("https://api.tvmaze.com/shows")
      .then(function(response){
        for (let i = 0; i < response.data.length; i++) {
          for (let j = 0; j < 5; j++) {
            if(response.data[i].genres[j]==="Comedy"){
                arr1.push(response.data[i]) 
            }
          }

        }
        return setAllList(arr1)
      })
      .catch((error) => console.log(error));
  };
  const getRomance = () => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then(function(response){
        for (let i = 0; i < response.data.length; i++) {
          for (let j = 0; j < 5; j++) {
            if(response.data[i].genres[j]==="Romance"){
                arr1.push(response.data[i]) 
            }
          }

        }
        return setAllList(arr1)
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => setAllList(response.data))
      .catch((error) => console.log(error));
  },[]);
  

  return (
    <div className="App">
      
      <br/>
      <ul className="topnav">
    <li><a onClick={getAll}    className="active"  >TV Shows</a></li>
    <li><a onClick={getAll}  >Home</a></li>
    <li><a onClick={getAction} >Action</a></li>
    <li><a onClick={getComedy} >Comedy</a></li>
    <li><a  onClick={getRomance}>Romance</a></li>
    <li  className="right"><a ><div className="main-div">
      <div className="button-div"> <button className="fav-button"> <i className="fa fa-star"></i> <span>Favorites</span> </button> </div>
  </div></a></li>
  </ul>
      
  <AllShow allList={allList}/>
  <ActionShow allList={allList}/>
  <ComedyShow allList={allList}/>
  <RomanceShow allList={allList}/>
  
  
    </div>
  );
}

export default App;
