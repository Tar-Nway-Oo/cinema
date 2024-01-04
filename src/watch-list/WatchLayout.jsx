import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import "../App.css"

export default function WatchLayout() {

   const [form, setForm] = useState({
      name: "",
      password: ""
   })

   const [correct, setCorrect] = useState(false)

   const [error, setError] = useState(null)

   function handleForm(event) {
      const {name, value} = event.target;
      setForm(prev => ({
         ...prev,
         [name]: value
      }))
   }

   function submit(event) {
      if ((form.name.toLowerCase() === "zac" && form.password === "321") || (form.name.toLowerCase() === "marvo zak" && form.password === "123")) {
         setCorrect(true)
      }
      setError("Couldn't Log The User In")
   }

   return(
      <div>
         {!correct ?
         <div className="form">
            <div className="form-item">
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" value={form.name} onChange={handleForm} />
            </div>
            <div className="form-item">
            <label htmlFor="password">Password: </label>
            <input id="password" name="password" value={form.password} onChange={handleForm} />
            </div>
            <button onClick={submit} className="form-item">Login</button>
            {error && <p className="form-item">{error}</p>}
         </div>
         : <Outlet />
}
      </div>
   )
}