import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react"
import styled from "styled-components";
import { DiscussionEmbed } from 'disqus-react';
import { useNavigate } from "react-router-dom";
import CommentSection from "../components/CommentSection";

/*<DiscussionEmbed
   shortname='example'
   config={
       {
           url: `http://localhost:3000/post/${id}`,
           identifier: `${id}`,
           title: `${post.content.title}`,
           language: 'eng' //e.g. for Traditional Chinese (Taiwan)
       }
   }
   />*/


const IndividualPost = () => {
const [post, setPost] = useState();
const { id } = useParams();
const [formData, setFormData] = useState({});
const navigate = useNavigate();
const [comment, setComment] = useState([]);
const [listOfComments, setListOfComments] = useState();

 //const [description, setDescription] = useState();
 //const [listOfComments, setListOfComments] = post?.comments

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
   })
   .catch((error) => {
     console.error("Invalid Data Received:", error);
   });
},[])

/*const updateComment = (id,value) =>{
  setComment ({
    author: post.content.author,
    [id]:value 
  })
}*/

const handleChange = (id,value)=> {  
    setFormData(
    {...formData,
      author: post.content.author,
      [id]:value}
  )
}

const createNewPost = async (ev) =>{
  
  
  const response = await fetch(`/modify-post/${id}`,{
      method: 'PATCH',
      headers:{
          Accept: "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify({comment: formData}),
  })
  
}

/*const arrayOfComments = () =>{
if (listOfComments){
  setComment(Object.entries(listOfComments))
}
}
arrayOfComments();
*/
console.log(id);
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
   <Form onSubmit={createNewPost}>
  <label htmlFor="comment">Leave a Comment!</label>
   <Input type="text"
   id="comment"
   name="commentSection"
   onChange={ev=>handleChange(ev.target.id, ev.target.value)}
   ></Input>
   <Button>Send</Button>
   </Form>
  <CommentSection commentList = {post?.comment}/>
  </PostPage>
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

const Form = styled.form`
margin: 25px 0px;
display: flex;
flex-direction:column;
align-items: center;
justify-content: space-between;
height: 15vh;
`
const Input = styled.input`
width: 100%;
height: 24px;
border-radius: 25px;
padding: 0px 10px;
`
const Button = styled.button`
padding: 5px 10px;
width: 50%;
border-radius: 25px;
border: none;
outline: none;
`

export default IndividualPost;