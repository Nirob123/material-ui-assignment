import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId}=useParams();
    const [post,setPost]=useState([]);
    useEffect(()=>{
   const url=`https://jsonplaceholder.typicode.com/posts/${postId}`;
   fetch(url)
   .then(res=>res.json())
   .then(data=>setPost(data))
    },[postId]);
    const postStyle={
        border:"1px solid lightGray",
        margin:"20px",
        padding:"20px",
        borderRadius:"20px"
    }
    return (
        <div style={postStyle}>
            <h1>Your Post Number:{postId}</h1>
             <p>Id:{post.id}</p>
            <p>Title:{post.title}</p>
            <h4>Post:</h4>
             <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;