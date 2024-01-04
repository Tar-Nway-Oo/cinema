import React from "react";
import { useOutletContext } from "react-router-dom";
import "../App.css";


export default function MovieDetail() {

   const selectedMovie = useOutletContext()

   const details = selectedMovie.map(movie => (
      <div className="movie-detail">
         <h2>{movie.name}</h2>
         <p><strong>Genre: </strong>{movie.genre}</p>
         <p><strong>Rating: </strong>{movie.rating}</p>
      </div>
   ))

   return(
      <div>
         {details}
      </div>
   )
}