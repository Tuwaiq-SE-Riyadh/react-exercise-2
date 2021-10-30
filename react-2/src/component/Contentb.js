
import './style.css';
import { useState, useEffect } from "react";
import axios from "axios";
import ListItems from './ListItems'
import Header from './Header';

function Contentb({list}) {


      
      console.log(list)
  return (
    
<>
<div className="cc">
{list.map((element, index) => {
return<ListItems elemnt={element}  index={index} list={list}/>
      })}
     


</div>
</>
  );
}

export default Contentb;