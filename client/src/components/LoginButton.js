import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";


const LoginButton = () => {
 const { loginWithRedirect } = useAuth0();


 return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
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


export default LoginButton;
