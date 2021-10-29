import { useState, useEffect } from "react";
import Fav from "./Fav";
function Item({name ,i,  gender, species, status, image, list, setList}) {
  return (
    <>
    <div className="item">
        <img className="imgItem" src={image}/>
        <p>{name}</p>
        <p>gender: {gender}</p>
        {/* <p>species: {species}</p>
        <p>status:{status}</p> */}
        <Fav list={list} setList={setList} keys={i}/>
    </div>
    </>
  );
}

export default Item;
