import React from 'react';
import img from '../../../src/images/people.jpg';

const CommentDetails = (props) => {
const {body,id,name,email}=props.comment;
    const commentStyle={
        border:"1px solid lightGray",
        margin:"20px",
        padding:"20px",
        borderRadius:"20px"
    }
    return (
        <div style={commentStyle}>
            <h2>Id:{id}</h2>
            <img  style={{borderRadius:"100px"}} src ={img} alt=""/>
          <h3>Name:{name}</h3>
         <h4>Email:{email}</h4>
        <h3> Comment:</h3>
        <p>{body}</p>

        </div>
    );
};

export default CommentDetails;
