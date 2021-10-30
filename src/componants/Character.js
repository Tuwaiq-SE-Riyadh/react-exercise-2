import List from "./List";
import { useState, useEffect } from "react";
import './compo.css';

function Character({ele}){
    const [listState, setListState] = useState(false);

    const list =()=>{
        if(listState === false){
            setListState(true);
        }
        else if(listState === true){
            setListState(false);
        }
        
     
    }
    return(
            <div id="character" onClick={list}>
            <img src={ele.image}/>
            <h4>{ele.name}</h4>
            {listState && <List ele={ele}/>} 
        </div> 
    );
    }
    
    export default Character;