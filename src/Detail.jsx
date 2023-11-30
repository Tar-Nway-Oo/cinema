import React, {useState} from "react";
import { useParams, Link, useLocation, Outlet, NavLink } from "react-router-dom"; 
import data from "./server.js"
import "./App.css"

export default function Detail() {

   const [movieDetails, setMoviedetails] = useState(data)

   const params = useParams();

   const location = useLocation();

   const search = location.state?.search || ""

   const selectedMovie = params ? movieDetails.filter(movie => movie.id === params.id) : movieDetails

   const movieDetail = selectedMovie.map(movie => (
      <div key={movie.id} className="movie-detail">
         <img src={movie.url} alt={movie.name} className="movie-img" />
      </div>
   ))

   return(
      <div>
         <Link to={`..${search}`} className="backto-link">Back to previous page</Link>
         {movieDetail}
          <NavLink className={`detail--link ${({isActive}) => {
            isActive ? "active" : ""
          }}`} to="." end>Details</NavLink>
          <NavLink className={`detail--link ${({isActive}) => { 
             }}`} to="desc">Description</NavLink>
         <Outlet context={selectedMovie} />
      </div>
   )

   
}