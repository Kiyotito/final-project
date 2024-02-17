import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react"
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  //const [profileObtained, setProfileObtained] = useState(false)
  const [profile, setProfile] = useState();
  //const { id } = useParams();
  const [formData, setFormData] = useState({});
  const {user} =useContext(UserContext);
  const {isAuthenticated, isLoading} = useAuth0();
  const _id = user.id
  const navigate = useNavigate();

  useEffect(()=>{
    if (_id){
    fetch(`/get-a-profile/${_id}`)
       .then((response) => {
         if (response.ok) {
           return response.json();
         } else {
           throw new Error("Could not retrieve profile!");
         }
       })
       .then((data) => {
        setProfile(data.data);
       })
       .catch((error) => {
         console.error("Invalid Data Received:", error);
       });  
    }
   },[_id])

  
   const handleChange = (id,value)=> {
    setFormData({
        ...formData,
        [id]:value,
    })
}

  const createNewProfile = async (ev) =>{
    
     const response = await fetch(`/modify-profile/${_id}`,{
         method: 'PATCH',
         headers:{
             Accept: "application/json",
             "Content-Type": "application/json",
         },
         body: JSON.stringify({profileInfo:formData}),
     })
     navigate(`/`)
 }
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    profile && (
      <ProfileInfo>
        <ProfileHeader>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>Phone Number: {profile.profileInfo.phoneNumber?<>{profile.profileInfo.phoneNumber}</>:<></>}</p>
        <p>Username: {profile.profileInfo.username?<>{profile.profileInfo.username}</>:<></>}</p>
        <p>Address: {profile.profileInfo.address?<>{profile.profileInfo.address}</>:<></>}</p>
        </ProfileHeader>
        
        
        <ProfileForm onSubmit={createNewProfile}>
        <div>If information above is incorrect, please change using the form below!</div>
        <label htmlFor="username">Username</label>
        <TextInput type="text"
        id="username"
        name="profileContent"
        onChange={ev=>handleChange(ev.target.id, ev.target.value)}
        />
        
        <label htmlFor="phoneNumber">Phone Number</label>
        <TextInput type="text"
        id="phoneNumber"
        name="profileContent"
        onChange={ev=>handleChange(ev.target.id, ev.target.value)}
        />

        <label htmlFor="address">Address</label>
        <TextInput type="text"
        id="address"
        name="profileContent"
        onChange={ev=>handleChange(ev.target.id, ev.target.value)}
        />
        
        <Button>Update Profile</Button>
        </ProfileForm>
      </ProfileInfo>
    )
  );
};

export default Profile;

const ProfileInfo = styled.div`
margin-top: 15vh;
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
`
const TextInput = styled.input`
border-radius: 10px;
padding: 5px 50px;
margin: 10px;
text-align: center;
&:focus {
outline: 3px solid black;
}
`


const ProfileForm = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
`


const ProfileHeader = styled.div`
background-color: lightgray;
padding: 50px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
border-radius: 25px;
margin-bottom: 25px;
border: 5px solid #F9A873 ;
background-color: #F9B183;
`
const Button =styled.button`
border-radius: 10px;
padding: 10px 20px;
text-decoration: none;
border: none;
background-color: #F9A873;
font-weight: 900;
margin: 20pxS;
&:hover{
background-color: #F67C2D;
}
`
const Instruction = styled.div`
margin: 25px;
font-weight: 900;
font-size: 1rem;
`
