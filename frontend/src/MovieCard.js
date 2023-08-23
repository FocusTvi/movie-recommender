import React,{ useState} from "react";

function MovieCard({movie}){

    console.log(movie)
    return <div className="movie-list">
      <a href={movie.url} className="movie-card">
        <h2>{movie.title}</h2>
        <img src={movie.poster_path} alt={movie.titles}></img>
        <p>{movie.release_date}</p>
        <p>{movie.popularity}</p>
        <p>{movie.vote_average}</p>
        <p>{movie.vote_count}</p>

      </a>
    </div>

}

export default MovieCard;