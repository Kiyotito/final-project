import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react"
import styled from "styled-components";
import { DiscussionEmbed } from 'disqus-react';




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
   <PostPage>
   <Img src={post.content.imgURL} alt=""/>
   <ContentSection>
   <Title>{post.content.title}</Title>
   <Summary>{post.content.summary}</Summary>
   <MainText dangerouslySetInnerHTML={{__html: post.content.text}}/>
   </ContentSection>
  
   </PostPage>
   <DiscussionEmbed
   shortname='example'
   config={
       {
           url: `http://localhost:3000/post/${id}`,
           identifier: `${id}`,
           title: `${post.content.title}`,
           language: 'eng' //e.g. for Traditional Chinese (Taiwan)
       }
   }
   />
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
border-radius: 25px;
margin: 20px;
`


const PostPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #A6481E;
color: #F0EFEF;
border-radius: 25px;
margin: 25px 25px;
padding: 25px;
`
const ContentSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


const Title = styled.h1`
font-size: 2rem;
margin-bottom: 10px;
`;


const Summary = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`;


const MainText = styled.div`
margin-top: 25px;
`;
export default IndividualPost;