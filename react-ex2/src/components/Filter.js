import axios from "axios";
import Cards from "./Cards";
import {useState , useEffect} from "react";


function Filter() {
    const [card, setcard] = useState([]);
    const headers =  {headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '39429e16bcmsh5f6d0ffb04872cep1f59bejsn6a4f583d3e72'}}

    const getgames = () => {
        axios
          .get("https://free-to-play-games-database.p.rapidapi.com/api/games",headers)
          .then((response) => setcard(response.data))
          .catch((error) => console.log(error));};

      const filtering= (e) => {
        const filter ={params: {category: e.target.value},
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key': '39429e16bcmsh5f6d0ffb04872cep1f59bejsn6a4f583d3e72'}};
  
        axios
          .get("https://free-to-play-games-database.p.rapidapi.com/api/games",filter)
          .then((response) => setcard(response.data))
          .catch((error) => console.log(error));
      };

      useEffect(() => {
        axios
          .get("https://free-to-play-games-database.p.rapidapi.com/api/games",headers)
          .then((response) => setcard(response.data))
          .catch((error) => console.log(error));
      },[]);
    
    return(
        <>
        <div class="filter">
            <div class="form-2">
                <h3 id="bord">Genre</h3> 
                <label><input type="radio" onChange={getgames} name="Genre" value="MMO"/>All</label> 
                <label><input type="radio" onChange={filtering} name="Genre" value="MMO"/>MMO</label> 
                <label><input type="radio" onChange={filtering} name="Genre" value="MMORPG"/>MMORPG</label> 
                <label><input type="radio" onChange={filtering} name="Genre" value="Shooter"/>Shooter</label>
                <label><input type="radio" onChange={filtering} name="Genre" value="Strategy"/>Strategy</label>
                <label><input type="radio" onChange={filtering} name="Genre" value="Moba"/>Moba</label>
                <label><input type="radio" onChange={filtering} name="Genre" value="Battle Royale"/>Battle Royale</label> 
                <label><input type="radio" onChange={filtering} name="Genre" value="Card"/>Card</label> 
                <label><input type="radio" onChange={filtering} name="Genre" value="Racing"/>Racing</label>
                <label><input type="radio" onChange={filtering} name="Genre" value="Sports"/>Sports</label> 
                <label><input type="radio" onChange={filtering} name="Genre" value="Social"/>Social</label> 
                <label><input type="radio" onChange={filtering} name="Genre" value="Fighting"/>Fighting</label>
            </div>
        </div>
        <div className="cards">
            
        {card.map((element) => {
          return (<Cards title = {element.title} image={element.thumbnail} desc = {element.short_description}/>
          )
        }
      )}
      </div>
        </>
    )
}

export default Filter

