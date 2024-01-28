import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react"
import styled from "styled-components";


const IndividualPost = () => {
  const [post, setPost] = useState();
  const { id } = useParams();
  const [comments, setComments] = useState();
  //const [description, setDescription] = useState();

useEffect(()=>{
 fetch(`/get-a-post/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Could not retrieve post!");
      }
    })
    .then((data) => {
      setPost(data.data);
      //setDescription = post.content.text;
    })
    .catch((error) => {
      console.error("Invalid Data Received:", error);
    });
},[])

  return ( 
  <div>
  {
    post ?
    <>
    <Img src={post.content.imgURL} alt=""/>
    <div>{post.content.title}</div>
    <div>{post.content.summary}</div>
    <div dangerouslySetInnerHTML={{__html: post.content.text}}/>
    <div>{}</div>
    </>
    
    :
    <div>Loading</div>
  }
  </div>
  )
};

const Img = styled.img`
max-width: 250px;
height: auto;
`
export default IndividualPost;
