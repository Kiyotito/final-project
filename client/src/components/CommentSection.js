import React from "react";
import styled from "styled-components";
import { useState } from "react"
import { useEffect } from "react";



const CommentSection = ({commentList}) => {

const [comment, setComment] = useState([]);
const [commentBoolean, setCommentBoolean] = useState(false)
const [post, setPost] = useState();
const { v4: uuidv4 } = require("uuid");

useEffect(()=>{
    if (commentList){
    setComment(Object.entries(commentList));
}
    },[])

//const randomKey = Math.floor(Math.random() * 10000)


return(
    
    <CommentBox>
    {
     commentList ?
        comment.map((comment)=>{
            return (
            <Comment key = {uuidv4()}>
                <div>{comment[1].author}:</div><div>{comment[1].comment}</div>
            </Comment>
            );
        })
     :
     <div>There are no comments! Be the first!</div>
    }
    
    </CommentBox>
)
};

const CommentBox = styled.div`
width: auto;
border-radius: 25px;
padding: 50px;
background-color: #FBF2ED;
color: black;
`
const Comment = styled.div`
display: flex;
gap: 10px;
`
export default CommentSection;

