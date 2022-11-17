import React, {useState} from 'react'
import {Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Alert from "./components/Alert"
import Login from './components/Login'

function App() {
  const [message,setMessage] = useState(null);
  const[category,setCategory] =useState(null);
 
  const flashMessage=(message,category) =>{
    setMessage(message);
    setCategory(category);
  }

  return (
  <>
    <Navbar/>
    <div className="container">
      
      {message ? <Alert message={message} category={category} flashMessage={flashMessage}/>:null}
      <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/signup' element ={<Signup flashMessage={flashMessage}/>}/>
          <Route path='/login' element ={<Login/>}/>


      </Routes>
    </div>
  </>
  )
}

export default App
