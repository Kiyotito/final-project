import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";










const modules = {
   toolbar: [
       [{ 'header': [1, 2, false] }],
       ['bold', 'italic', 'underline','strike', 'blockquote'],
       [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
       ['link', 'image'],
       ['clean']
     ]
}
const formats = [
   'header',
   'bold', 'italic', 'underline', 'strike', 'blockquote',
   'list', 'bullet', 'indent',
   'link', 'image'
]






const CreateNewPost = () => {
   const [formData, setFormData] = useState({});
   const {user} =useContext(UserContext);
   const userName = user.name;
   const date = new Date()
   const dateString = date.toDateString();
   const navigate = useNavigate();




const handleChange = (id,value)=> {
   setFormData({
       ...formData,
       [id]:value,
   })
}


const handleTextChange = (text,value)=> {
   setFormData({
       ...formData,
       text:value,
       author: userName,
       date: dateString,
       comment: "",
   })
}


   const createNewPost = async (ev) =>{
       ev.preventDefault();
       console.log(formData);
       const response = await fetch('/create-post',{
           method: 'POST',
           headers:{
               Accept: "application/json",
               "Content-Type": "application/json",
           },
           body: JSON.stringify({content:formData}),
       })
       navigate(`/`)
   }


 


   return(
       <Form onSubmit={createNewPost}>
           <label htmlFor="Title">Title</label>
           <Input type="title"
           id= "title"
           name="postContent"
           placeholder={'Title'}
           onChange={ev=>handleChange(ev.target.id, ev.target.value)}/>
           <label htmlFor="Summary">Summary</label>
           <Input type="summary"
           id= "summary"
           name="postContent"
           placeholder={'Summary'}
           onChange={ev=>handleChange(ev.target.id, ev.target.value)}/>
           <label htmlFor="imgURL">ImageURL</label>
           <Input type="text"
           id= "imgURL"
           name="postContent" 
           placeholder={'Image URL'}
           onChange={ev=>handleChange(ev.target.id, ev.target.value)}/>
           <Editor
           id= "content"
           name="postContent"
           //value ={content}
           onChange={newValue=>handleTextChange("text", newValue)}
           modules={modules} formats={formats}/>
           <Button>Create Post</Button>
       </Form>
   )


}


const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;
align-items: center;
`
const Input = styled.input`
height: 25px;
border-radius: 5px;
width: 50vw;
`
const Button =styled.button`
border-radius: 10px;
padding: 10px 20px;
text-decoration: none;
border: none;
background-color: #F9A873;
font-weight: 900;
width: 20vw;
&:hover{
background-color: #F67C2D;
}`


const Editor = styled(ReactQuill)`
background-color: white;
width: 50vw;
margin-bottom: 20px;
`


export default CreateNewPost;
