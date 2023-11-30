import React, {useState, useEffect} from "react";
import { useSearchParams, Link } from "react-router-dom";
import data from "./server.js"
import "./index.css"


export default function Home() {
    
const [movies, setMovies] = useState(data)

const [searchParams, setSearchParams] = useSearchParams()

const filter = searchParams.get("genre")

const state = searchParams.toString();

const filteredMovies = filter ? movies.filter(movie => movie.genre === filter) : movies

const movieCard = filteredMovies.map(movie => (
      <div key={movie.id} className="card">
      <Link to={movie.id} state={{search: `?${state}`}}>
        <img src={movie.url} className="img" alt={movie.name} />
      </Link>
      <h4>{movie.name}</h4>
      <p>{movie.genre}</p>
   </div>
))

return(
   <div>
      <nav className="nav">
        <button onClick={() => setSearchParams({})} className={filter === "" ? "selected" : ""}>All</button>
        <button onClick={() => setSearchParams({genre: "romance"})} className={filter === "romance" ? "selected" : ""}>Romance</button>
        <button onClick={() => setSearchParams({genre: "drama"})} className={filter === "drama" ? "selected" : ""}>Drama</button>
        <button onClick={() => setSearchParams({genre: "horror"})} className={filter === "horror" ? "selected" : ""}>Horror</button>
        <button onClick={() => setSearchParams({genre: "sci-fi"})} className={filter === "sci-fi" ? "selected" : ""}>Sci-Fi</button>
        <button onClick={() => setSearchParams({genre: "comedy"})} className={filter === "comedy" ? "selected" : ""}>Comedy</button>
        <button onClick={() => setSearchParams({genre: "musical"})} className={filter === "musical" ? "selected" : ""}>Musical</button>
        <button onClick={() => setSearchParams({genre: "animation"})} className={filter === "animation" ? "selected" : ""}>Animation</button>
        <button onClick={() => setSearchParams({genre: "thriller"})} className={filter === "thriller" ? "selected" : ""}>Thriller</button>
      </nav>
      <main className="main">
        {movieCard}
      </main>
   </div>
)

}