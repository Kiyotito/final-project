
import React from "react";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const DeleteButton = ({post,_id}) => {

const author = post.content.author
const {user} =useContext(UserContext);
const userName = user.name;
const navigate = useNavigate();


const deletePost = async (ev) =>{
   const response = await fetch(`/delete-post/${_id}`,{
       method: 'DELETE',
       headers:{
           Accept: "application/json",
           "Content-Type": "application/json",
       },
       body: JSON.stringify({comment: "Deletion Successful"}),
   })
   navigate(`/`)
 }

 return (
    <>
    {userName === author
        ?<div>
         <Button onClick = {deletePost} >Do you want to delete your post?</Button>
        </div>
        
       :
       <></>
       }
    </>
 )
};


const Button =styled.button`
border-radius: 10px;
padding: 10px 20px;
text-decoration: none;
border: none;
background-color: #F9A873;
font-weight: 900;
margin-top: 25px;
&:hover{
background-color: #F67C2D;
}
`


export default DeleteButton;


