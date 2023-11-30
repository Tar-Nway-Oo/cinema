import React from 'react'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, BrowserRouter} from "react-router-dom"
import './index.css'
import Home from "./Home.jsx"
import Detail from "./Detail.jsx"
import WatchList from "./WatchList.jsx"
import Layout from './Layout.jsx'
import WatchLayout from './WatchLayout.jsx'
import MovieDetail from './MovieDetail.jsx'
import Desc from './Desc.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path=":id" element={<Detail />}>
      <Route index element={<MovieDetail />} />
      <Route path="desc" element={<Desc />} />
    </Route>
    <Route element={<WatchLayout />}>
     <Route path="watchlist" element={<WatchList />} />
    </Route>
  </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
