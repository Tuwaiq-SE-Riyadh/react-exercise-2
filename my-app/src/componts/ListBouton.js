import { useState } from "react";
import Show from "./Show";
function ListBouton({mymeal ,setmymeal}){
    const [closeBotton, setcloseBotton,] = useState(false);
    console.log({ mymeal});
 
const close=()=>{
    
        setcloseBotton(true)
       

}

   if(closeBotton===true){
    return(
        <>
        </>
    )
       
   }else{
       return(
        <div class = "meal-details showRecipe">
    <button onClick={close} type = "button" class = "btn recipe-close-btn" id = "recipe-close-btn">
          X
        </button>

       <Show
    title={mymeal.strMeal}
    categoryg={mymeal.strCategory}
    Instructions ={mymeal.strInstructions}
    img={mymeal.strMealThumb}
    link={mymeal.strYoutube}
    
       /> 
        </div>
    )

   }
    
}
export default ListBouton;