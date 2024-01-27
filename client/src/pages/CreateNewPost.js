import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";




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
    const [title,setTitle]= useState('');
    const [summary,setSummary]= useState('');
    const [content,setContent]= useState('');
    const [imgURL,setImgURL]= useState('');
    const [formData, setFormData] = useState({});

const handleChange = (id,value)=> {
    setFormData({
        ...formData,
        [id]:value,
    })
    console.log(formData);
}

const handleTextChange = (text,value)=> {
    setFormData({
        ...formData,
        text:value,
    })
    console.log(formData);
}

    const createNewPost = async (ev) =>{
        ev.preventDefault();
        const response = await fetch('/create-post',{
            method: 'POST',
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({content:formData}),
        })
    }

    const { user, isAuthenticated, isLoading} = useAuth0();
    console.log(user, isAuthenticated, isLoading);
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
            <ReactQuill 
            id= "content"
            name="postContent" 
            onChange={newValue=>handleTextChange("text", newValue)}
            modules={modules} formats={formats}/>
            <Button>Create Post</Button>
        </Form>
    )

}

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
justify-content: center;
`
const Input = styled.input`
height: 25px;
border-radius: 5px;
`
const Button = styled.button`
margin-top: 10px;
`

export default CreateNewPost;