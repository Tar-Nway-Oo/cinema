import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../index.css"

export default function Layout() {
   return(
      <div>
       <header className="container">
         <div className="header">
           <h1>CINEMA</h1>
           <p>All about movies</p>
        </div>
       <NavLink className={`navbar-link ${({isActive}) => {isActive ? "active" : ""}}`} to="/" end>Home</NavLink>
       <NavLink className={`navbar-link ${({isActive}) => {isActive ? "active" : ""}}`} to="watchlist">WatchList</NavLink>
      </header>
      <Outlet />
      </div>
   )
}
