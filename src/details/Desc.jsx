import React from "react";
import { useOutletContext } from "react-router-dom";
import "../App.css"

export default function Desc() {
   const selectedMovie = useOutletContext()

   const description = selectedMovie.map(movie => (
      <div className="movie-detail">
         <p>{movie.desc}</p>
      </div>
   ))

   return(
      <div>
         {description}
      </div>
   )
}