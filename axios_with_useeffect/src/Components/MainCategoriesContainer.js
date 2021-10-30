import { useState, useEffect } from "react";

import "./MainCategoriesContainer.css"
import axios from "axios";



function MainCategoriesContainer({setLink})
{

    // const listOfCategories = [{name:"Popular Movies", onclickFunction:popularMovies()},{name:"Top Rated Movies" , onclickFunction:topRatedMovies()},{name:"Popular Persons" , onclickFunction:popularPerson()},{name:"Search Movies" , onclickFunction:searchMovies()}]


    // const listOfCategoriesAfterMap = ()=>{
    //     return listOfCategories.map((elemnt , index)=>{
    //         return <div className="main-grid-item"><button className="button-item" onClick={elemnt.onclickFunction}>{elemnt.name}</button></div>
    //     })
    // }

    const popularMovies = () => {
        axios
        .get("https://api.themoviedb.org/3/movie/popular?api_key=9605b226360bf8f3f03d5da3c0a1f662")
        .then((response) => setLink(response.data.results))
        .catch((error) => console.log(error));
    }
    const topRatedMovies = () => {
        axios
        .get("https://api.themoviedb.org/3/movie/top_rated?api_key=9605b226360bf8f3f03d5da3c0a1f662")
        .then((response) => setLink(response.data.results))
        .catch((error) => console.log(error));
    }
    const popularPersons = () => {
        axios
        .get("https://api.themoviedb.org/3/person/popular?api_key=9605b226360bf8f3f03d5da3c0a1f662")
        .then((response) => setLink(response.data.results))
        .catch((error) => console.log(error));
    }
    const searchMovies = () => {
        console.log("searchMovies Not yet implemented")
    }

    useEffect(() => {
        console.log("useEffect apply ")
        axios
        .get("https://api.themoviedb.org/3/movie/popular?api_key=9605b226360bf8f3f03d5da3c0a1f662")
        .then((response) => setLink(response.data.results))
        .catch((error) => console.log(error));
    },[]);

    return <>   
                {/* {listOfCategoriesAfterMap()} */}

                <div className="main-grid-item"><button className="button-item" onClick={popularMovies}>Popular Movies</button></div>
                <div className="main-grid-item"><button className="button-item"onClick={topRatedMovies} >Top Rated Movies</button></div>
                <div className="main-grid-item"><button className="button-item"onClick={popularPersons}>Popular Persons</button></div>
                <div className="main-grid-item"><button className="button-item"onClick={searchMovies}>Search Movies</button></div>
            </>
}

export default MainCategoriesContainer;