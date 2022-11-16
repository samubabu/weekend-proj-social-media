import React, {useState, useEffect} from 'react';
import PostCard from './PostCard'

function Home(props) {
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
            fetch("https://kekambas-blog.herokuapp.com/blog/posts")
            .then(res => res.json())
            //.then (data => console.log(data))
            .then (data => {
                console.log(data);
                setPosts(data)
            })
            .catch(err=> console.log(err))

    }, [])
  return (
    //react fragment
    <>
        <h1 className='text-center'>Welcome to Social Media</h1>
        {posts.map(post => <PostCard post={post}/>)}
    
    </>
  )
}

export default Home