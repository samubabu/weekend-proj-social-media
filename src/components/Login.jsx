import React from 'react';
import { useNavigate }  from 'react-router-dom';

export default function Login(props) {

    const navigate=useNavigate();

    const handleSubmit = async event=>{
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

let response = await fetch('https://kekambas-blog.herokuapp.com/auth/token', {
    method: 'POST',
    headers: myHeaders
})

if (response.ok){
    let data = await response.json()
        //.then(res=>res.json())
        //instead of logging the data, a local storage built  can be used
        //.then (data=>console.log(data))
     
            let token =data.token;
            //store values in local stoarge on the browser
            localStorage.setItem('token',token);
            //redirect back to home back
            props.flashMessage("You have succesfully logged in", "success"); 
            props.logUserIn()
            navigate('/');
        }
        else {
            // flash a fail message
            props.flashMessage('Your username and/or password are incorrect', 'danger') 
        }

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
