import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-dark navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Welcome</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        {props.loggedIn ?(<>
          <Link className="nav-link" to ="/">Home</Link>
          <Link className="nav-link" to="/create">Create Post</Link>
          <Link className="nav-link" to="/login" onClick={props.logUserOut}>Log Out</Link>
          </>
        ):(<>
        <Link className="nav-link" to="/signup">Sign Up</Link>
        <Link className="nav-link" to="/login">Login</Link>
        </>
        )
        }
      </div>

    </div>




            </div>

        </nav>
    )
}