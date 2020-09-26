import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';
const Comment = () => {
    const {postId}=useParams();
    const [comments,setComments]=useState([]);
    useEffect(()=>{
    const url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setComments(data))
    },[]);
    return (
        <div>
          {
              comments.map(comment=> <CommentDetails comment={comment}></CommentDetails>)
          }
          
        </div>

    );
};

export default Comment;