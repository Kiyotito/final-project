import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Header = () => {
  return (
    <HeaderStyling>
      <HomeLink to="/">
        Ratios
      </HomeLink>
      <Nav>
        <LoginButton/>
        <LogoutButton/>
        <Links to="/register">Register</Links>
        <Links to="/Create-New-Post">Create New Post</Links>
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
`;
const Links = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 2rem;
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
`;

export default Header;
