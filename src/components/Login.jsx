import React from 'react';
import {useNavigate}  from 'react-router-dom';

export default function Login(props) {

    const navigate=useNavigate();

    const handleSubmit =event=>{
        event.preventDefault();
        console.log(event);

//get data from form
let username=event.target.username.value;
let password=event.target.password.value;
let stringToEncode=`${username}:${password}`
//console.log(username,password)
//to encode this username and password we use btoa
//console.log(btoa(`${username}:${password}`))

let myHeaders =new Headers();
myHeaders.append('Authorization',`Basic ${btoa(stringToEncode)}`)

fetch('https://kekambas-blog.herokuapp.com/auth/token', {
    method: 'POST',
    headers: myHeaders
})
        .then(res=>res.json())
        //instead of logging the data, a local storage built  can be used
        //.then (data=>console.log(data))
        .then(data=>{
            //get token from the response
            let token =data.token;
            //store values in local stoarge on the browser
            localStorage.setItem('token',token);
            //redirect back to home back
            navigate()
        })

    }
  return (
    <>
      <h3 className ="text-center">Login</h3>
      <form onSubmit ={handleSubmit}>
        <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className='form-control' placeholder='Enter Username' name='username' />
                        <label htmlFor="password">Password</label>
                        <input type="password" className='form-control' placeholder='Enter Password' name='password' />
                        <input type="submit" value="Signup" className='btn btn-success w-100 mt-3' />
        
        </div>
      </form>
      
      
      </>
  )
}
