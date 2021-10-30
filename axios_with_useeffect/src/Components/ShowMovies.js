import { useState, useEffect } from "react";
import axios from "axios";

function ShowMovies({link})
{

    // const [list, setList] = useState([]);

    // useEffect(() => {
    //     axios
    //     .get("https://api.themoviedb.org/3/movie/popular?api_key=9605b226360bf8f3f03d5da3c0a1f662")
    //     .then((response) => setList(response.data.results))
    //     .catch((error) => console.log(error));
    // },[]);

    const showMovi = ()=>{
        return link.map((ele)=>{
            if(ele.title)
            {
                return <h1>{ele.title}</h1>
            }
            else{
                return <h1>{ele.name}</h1>
            }
        })
    }


    return <>
            {showMovi()}
            </>
}

export default ShowMovies;