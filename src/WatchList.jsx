import React, {useState} from "react";
import data from "./server.js"
import "./index.css"

export default function WatchList() {

   const [watchMovies, setWatchMovies] = useState(data)

   const filter = watchMovies.filter(movie => movie.watchList)

   const watchMoviesEls = filter.map(movie => (
      <div className="card">
         <img src={movie.url} alt="movie image" />
         <h4>{movie.name}</h4>
         <p>{movie.genre}</p>
      </div>
   ))

   return(
      <div className="main">
         {watchMoviesEls}
      </div>
   )
}