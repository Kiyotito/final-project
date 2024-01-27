import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react"
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  //const [profileObtained, setProfileObtained] = useState(false)
  const [profile, setProfile] = useState();
  //const { id } = useParams();
  const [formData, setFormData] = useState({});
  const {user} =useContext(UserContext);
  const {isAuthenticated, isLoading} = useAuth0();
  const _id = user.id

  console.log(_id)

  /*
  useEffect(()=>{
    fetch(`/get-profile/_id`)
       .then((response) => {
         if (response.ok) {
           return response.json();
         } else {
           throw new Error("Could not retrieve post!");
         }
       })
       .then((data) => {
        setProfile(data.data);
        //setProfileObtained(true);
       })
       .catch((error) => {
         console.error("Invalid Data Received:", error);
       });
   },[])
*/

   const handleChange = (id,value)=> {
    setFormData({
        ...formData,
        [id]:value,
    })
    console.log(formData);
}

console.log(isAuthenticated)

  const createNewProfile = async (ev) =>{
     ev.preventDefault();
     const response = await fetch('/create-profile',{
         method: 'POST',
         headers:{
             Accept: "application/json",
             "Content-Type": "application/json",
         },
         body: JSON.stringify({content:formData}),
     })
 }
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <ProfileInfo>
        <ProfileHeader>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        </ProfileHeader>
        
        {/* Have 2 Forms, one if the user doesn't exist on MongoDB, and another for if the user does exist*/}
        <ProfileForm onSubmit={createNewProfile}>
        
        <label htmlFor="username">Username</label>
        <input type="text"
        id="username"
        name="profileContent"
        onChange={ev=>handleChange(ev.target.id, ev.target.value)}
        />
        
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text"
        id="phoneNumber"
        name="profileContent"
        onChange={ev=>handleChange(ev.target.id, ev.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input type="text"
        id="address"
        name="profileContent"
        onChange={ev=>handleChange(ev.target.id, ev.target.value)}
        />
        
        <button>Create Profile</button>
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

const ProfileForm = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
`

const ProfileHeader = styled.div`
background-color: lightgray;
padding: 20px 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
border-radius: 25px;
`