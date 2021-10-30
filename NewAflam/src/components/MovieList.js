import { useState, useEffect } from "react";
import axios from "axios";


const MovieList = (props) => {

    const [movies, setMovies] = useState([]);
    let searchText = props.text;
    var apiKey = "XRBvYpDb7tGHvehBfI9gC9kqxwtPh664";
    var url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchText}&api-key=${apiKey}`;
    useEffect(() => {
        axios.get(url).then(res => setMovies(res.data.results))
    })
    return (
        <>
            {movies.map((movie) => {
                return (

                    <div className="movie" key={movie.display_title}>
                        <img src={movie.multimedia.src ? movie.multimedia.src : ""} alt="" />
                        <div className="title">{movie.display_title}</div>
                        <div className="info">
                            <h3>Movie Info</h3>
                            <p>{movie.summary_short}</p>
                        </div>
                        <div className="actions">
                            <button className="add-to-cart" onClick={() => props.selectProduct(movie)}>Add to Cart</button>
                        </div>
                    </div>
                )
            })}

        </>
    )
}

export default MovieList