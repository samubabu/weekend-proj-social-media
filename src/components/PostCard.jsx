import React from 'react'
//will log out each post by switching prop
export default function PostCard({post})  {
    console.log([post])
    return (
      <div className="card">
        <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <a className="btn btn-primary" href="/">Go somewhere</a>
        </div>
      </div>
    )
  }

