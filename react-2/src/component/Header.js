
import './style.css';
import ListItems from './ListItems';
import { useState, useEffect } from "react";
import axios from "axios";

function Header({setList}) {
  console.log("i am in Header")
  const [seaechval, setSearch] = useState("");
  let newsearch;
  function search(e){
    newsearch=e.target.value
 
    
  }
  function changelist(){
    setList((list) => {
      const newArray = [];
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        console.log("the serch value "+newsearch)
        console.log("the elemnt value "+element.title)
        if (newsearch == element.title) {
          newArray.push(element);
        }
      }
      return newArray;
    });
  }
  


  return (
<>
<div class="topnav">
            <a  id="login"href="#login">LOG IN</a>
            <a id="movi"href="#Movi">MOVI</a>
            <a id="Favorate"href="#contact">FAVORATE</a>
            <a id="modify" href="#modify"></a>
            <input id="search" type="search" onChange={search} placeholder="Search.." /><button onClick={changelist}></button>
          </div>
          <header>
            
          </header>
          <div className="cc">

     


</div>
</>
  );
}

export default Header;