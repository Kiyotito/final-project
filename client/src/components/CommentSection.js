import React from "react";
import styled from "styled-components";
import { useState } from "react"
import { useEffect } from "react";

const CommentSection = ({commentList}) => {

const [comment, setComment] = useState([]);
const [commentBoolean, setCommentBoolean] = useState(false)
const [post, setPost] = useState();

useEffect(()=>{
    if (commentList){
    setComment(Object.entries(commentList));
}
    },[])



console.log(comment);
return(
    
    <CommentBox>
    {
     commentList ?
        comment.map((comment)=>{
            return (
            <div>
                <div>{comment[1].author}</div>
                <div>{comment[1].comment}</div>
            </div>
            );
        })
     :
     <div>There are no comments! Be the first!</div>
    }
    
    </CommentBox>
)
};

const CommentBox = styled.div`
width: 50vw;
border-radius: 25px;
padding: 50px;
background-color: #FBF2ED;
color: black;
`
export default CommentSection;

