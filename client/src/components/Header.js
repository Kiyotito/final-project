import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useAuth0 } from "@auth0/auth0-react";


const Header = () => {
 const {user} =useContext(UserContext);
 const {isAuthenticated} = useAuth0();


 return (
   <HeaderStyling>
     <HomeLink to="/">
       Ratios
     </HomeLink>
     <Nav>
     {
       isAuthenticated ?
       <>
       
       <Links to="/Profile">{user.name}</Links>
       <LogoutButton/>
       <Links to="/Create-New-Post">Create New Post</Links>
       </>
       :
       <LoginButton/>
       }
      
      
     </Nav>
   </HeaderStyling>
 );
};


const HeaderStyling = styled.main`
 display: flex;
 justify-content: space-between;
 margin-bottom: 50px;
 margin-top: 20px;
 align-items: center;
@media (max-width: 750px){
display: flex;
flex-direction: column;
}
`;
const Links = styled(Link)`
 text-decoration: none;
 color: inherit;
&:hover{
 color: #F67C2D;
}
`;


const HomeLink = styled(Link)`
 text-decoration: none;
 color: inherit;
 font-size: 3.5rem;
`;


const BlogName = styled(Link)`
 text-decoration: none;
 color: inherit;
 font-weight: bold;
 font-size: 1.5rem;
`;
const Nav = styled.nav`
 display: flex;
 gap: 15px;
align-items: center;
 @media (max-width: 750px){
display: flex;
flex-direction: column;
margin-top: 25px;
}
`;


export default Header;
