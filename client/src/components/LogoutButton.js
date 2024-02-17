import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useEffect } from "react";
import styled from "styled-components";




const LogoutButton = () => {
 const { logout } = useAuth0();
 const { user: UserFromAuth0} = useAuth0();
 const {createUserAndRecieveInfo,user } = useContext(UserContext);


 useEffect(() => {
   if (UserFromAuth0) {
     createUserAndRecieveInfo(UserFromAuth0);
   }
 }, [UserFromAuth0]);
  return (
   <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
     Log Out
   </Button>
 );
};


const Button =styled.button`
border-radius: 10px;
padding: 10px 20px;
text-decoration: none;
border: none;
background-color: #F9A873;
font-weight: 900;
&:hover{
background-color: #F67C2D;
}
`


export default LogoutButton;
