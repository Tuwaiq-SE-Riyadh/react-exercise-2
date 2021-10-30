import { useState, useEffect } from "react";

import MainCategoriesContainer from "./MainCategoriesContainer";
import ShowMovies from "./ShowMovies";
import "./Body.css"


function Body()
{
    const [link , setLink] = useState([])
    return <>
                <div className="main-grid-container">
                    <MainCategoriesContainer setLink={setLink}/>
                </div>
                <ShowMovies link={link}/>
            </>
}

export default Body;