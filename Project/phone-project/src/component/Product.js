import { useState } from "react"
import ProdectsOutput from "./ProdectsOutput"
import './component.css'

function Product({Products,ck}){
    let inputVal
const [inputValue,setValue]=useState()

    const onChange=(e)=>{
     inputVal=e.target.value
     console.log(inputVal);
     setValue(inputVal)
   }
   let b=false
   let i
   const searchProduct=()=>{
    
   }
 console.log(Products) 

    return(
        <>   
          
<input className="input1" type="text" onChange={onChange}  placeholder="Search.."/>
<div className="grids">
  {Products.filter((element)=>{
       console.log("in iffifif");
      if(!inputValue){   
          return  <ProdectsOutput Products={Products}phone_name={element.phone_name} image={element.image} brand={element.brand} detail={element.detail}/> 
      }else if(element.phone_name.toLowerCase().includes(inputValue)){
          return  <ProdectsOutput Products={Products}phone_name={element.phone_name} image={element.image} brand={element.brand}detail={element.detail}/>
      }
  }).map((element,index)=>{
          if(element){
             
             return (
             <>
          
 <ProdectsOutput Products={Products}phone_name={element.phone_name} image={element.image} brand={element.brand}detail={element.detail}/>
         
            </> )
           
          }
          

         })
       
         }
       </div>
       </> 
    )

}
export default Product


// {Products.map((element,index)=>{
//     if (element.phone_name) {
//      return <p key={element.id}> {element.phone_name}</p>;
//    }
//    if (element.title) {
//      return <p key={element.id}> {element.title}</p>;
//    }

//  })
//  }