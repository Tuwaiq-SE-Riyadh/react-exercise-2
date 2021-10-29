import { useState } from "react";
function Fav({list, setList,keys}) {
  const [fav, setFav] = useState(0)
  const [img, setImg] = useState("https://cdn-icons-png.flaticon.com/512/833/833386.png")

  const ClickFav =()=>{
    if(fav == 0){
      setImg("https://cdn-icons-png.flaticon.com/512/833/833472.png")
      setFav(fav+1)
    }else {
      setImg("https://cdn-icons-png.flaticon.com/512/833/833386.png")
      setFav(fav-1)
    }
  }
  console.log(fav);
  return (
          <div className="Fav">
            <p className="likeP">Do you like this character?</p>
            <input className="likeB" type="image" src={img} name="submit" onClick={ClickFav} 
              width="40" height="40" alt="submit"/>
          </div>
  );
}
  
export default Fav;
  