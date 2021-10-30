import React from 'react';

function Card({element}){

        return(
          <div>
             <p>{element.name}</p>
             <img src={element.image} alt={"characters"}></img>
          </div>
        )
    }



export default Card;