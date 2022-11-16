import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
  <>
    <Navbar/>
    <div className="container">
      <Routes>
          <Route path='/' element ={<Home/>}/>


      </Routes>
    </div>
  </>
  )
}

export default App
