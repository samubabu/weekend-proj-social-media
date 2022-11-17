import React, { Component } from 'react'
import {Navigate} from 'react-router-dom'

export default class Register extends Component {
    constructor (props){
      super(props);
      this.state={
        redirect: false,
        to: '/'
      }
    }

  handleSignup = event=>{
    event.preventDefault();
    //console.log(event)

    //we will however check the passwords match
    let password =event.target.password.value;
    let confirmPass =event.target.confirmPass.value;
    if (password !== confirmPass){
//so now all the props we did. this.props to get to our props, so the handleregister;
//instead of console.warn below we will
this.props.flashMessage('Passwords do not match', 'danger')
        //console.warn('Passwords do not match');
    } else{
        //console.log('These passwords do match');

        //setup request to our flask API -POST to /auth/users
        let myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        //get data from our form and stringfy to convert to JSON Request
        let formData = JSON.stringify({
          username: event.target.username.value,
          email: event.target.email.value,
          password
//Make request to flask api
        })
        fetch('https://kekambas-blog.herokuapp.com/auth/users',{
          method: 'POST',
          headers: myHeaders,
          body: formData
        } )
            
      .then(res=>res.json())
      //instead of loggin data we will say
      .then(data => {
        if (data.error){
          this.props.flashMessage.error(data.error, 'danger')


          //console.error(data.error)
        }else{
            console.log(data)
            this.props.flashMessage(`${data.username} has been created`, 'success')
            this.setState({
              //so after changing
              redirect: true
            })
        }
        
      })
      //.then(data=> console.log(data))
      .catch(err=>console.error(err))

    }
  }
  //function handleSignup (e)
//{
  //e.preventDefault();
  //console.log(e)
//}
  render() {
    return (
      <>
      {this.state.redirect ? <Navigate to ='/'/>:(
<>
      <h3 className ="text-center">Sign Up</h3>
      <form onSubmit ={this.handleSignup}>
        <div className="form-group">
        <label htmlFor="email">Email</label>
                        <input type="text" className='form-control' placeholder='Enter Email' name='email' />
                        <label htmlFor="username">Username</label>
                        <input type="text" className='form-control' placeholder='Enter Username' name='username' />
                        <label htmlFor="password">Password</label>
                        <input type="password" className='form-control' placeholder='Enter Password' name='password' />
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <input type="password" className='form-control' placeholder='Re-Enter Password' name='confirmPass' />
                        <input type="submit" value="Signup" className='btn btn-success w-100 mt-3' />
        
        </div>
      </form>
      
      
      </>
     )}
      </>
    )
  }
}
