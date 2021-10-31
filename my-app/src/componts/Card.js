import axios from "axios";
import { useState } from "react";
import ListBouton from "./ListBouton";
function Card({ img, p, id }) {
  const [mymeal, setmymeal] = useState("");
  const [x, setx] = useState(false);


  const disbly = (e) => {
    setx(true)
    e.preventDefault();

    if (e.target.classList.contains("recipe-btn")) {
      let mealItem = e.target.parentElement.parentElement;
      // console.log(mealItem );
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
        )
        .then(function (response) {
          console.log(response.data.meals[0]);
          setmymeal(response.data.meals[0]);
        });
    }

  
  };

  
 

  
    if (x == true) {
      return (
        <div class="meal-item" data-id={id}>
          <div class="meal-img">
            <img src={img} />
          </div>
          <div class="meal-name">
            <h3> {p} </h3>
            <a href="#" onClick={disbly} class="recipe-btn">
              Get Recipe{" "}
            </a>
          </div>

          <ListBouton mymeal={mymeal} />
        </div>
      );
    } else{
      return (
        <div class="meal-item" data-id={id}>
          <div class="meal-img">
            <img src={img} />
          </div>
          <div class="meal-name">
            <h3> {p} </h3>
            <a href="#" onClick={disbly} class="recipe-btn">
              Get Recipe{" "}
            </a>
          </div>
        </div>
      );

    }
  

  
}
export default Card;
