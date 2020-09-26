import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import img from '../../images/cooment.png';

const Post = (props) => {
    const {id,title}=props.post;
    const postStyle={
        border:"1px solid lightGray",
        margin:"20px",
        padding:"20px",
        borderRadius:"20px"
    }
    const history=useHistory();
    const handleBtn=()=>{
     const  url=`post/${id}`
       history.push(url)
    }
    const handleCommentBtn=()=>{
      const  url=`comment/${id}`
      history.push(url)
    }
    return (
        <div style={postStyle} >
            <h3>Post No:{id}</h3>
         <h4>Your Post:</h4>
           <p>{title}</p>
             <Button  onClick={handleBtn} variant="outlined" color="primary">
               See More   
            </Button>
            <br/>
            Or
            <br/>
            <Link to={`/post/${id}`}> See Details </Link>
           <br/> <br/>
            <Button  onClick={handleCommentBtn} variant="contained" > <img style={{height:"30px"}} src={img}alt=""/> Comment </Button>
            <br/> 
            Or
            <br/>
            <Link to={`/comment/${id}`} >Comment </Link>

          

        </div>
    );
};

export default Post;