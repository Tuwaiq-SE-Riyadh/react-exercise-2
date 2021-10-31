// import { useState } from "react";
import List from "./List";
function HeaderSarsh ({ inputSearch,setinputSearch,setbast}){

// const[inputSearch,setinputSearch]=useState([])

function inputSearch1(e){
  setinputSearch(e.target.value)
 
}
function add(){
  setbast(inputSearch)

  // <List page={page}  setPage={setPage} />
//   setPage.map((e,index)=>{
//     return(
//       <div>
//         if(e.strMeal=== inputSearch)
//       </div>
//     )
//   })

// setPage((list) => {

//   const newArray = list.slice()
//   return newArray.filter((element, i)=>{
//     return element.strMeal == inputSearch ?element.strMeal:" n"
//   })

// });
}






    return(
        
      <div class = "meal-search">
        <h2 class = "title">Find Meals For Your Ingredients</h2>
        <blockquote>Real food doesn't have ingredients, real food is ingredients.
          <cite>- Jamie Oliver</cite>
        </blockquote>
        <div class = "meal-search-box">
          <input type = "text" value={inputSearch} class = "search-control" placeholder="Enter an ingredient" id = "search-input" onChange={inputSearch1} />
          <button type = "submit" class = "search-btn btn" id = "search-btn" onClick={add}>
            <i class = "fas fa-search"></i>
          </button>
        </div>
        </div>
     
    )
}
export default HeaderSarsh;