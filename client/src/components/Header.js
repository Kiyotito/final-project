import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyling>
      <BlogName href="" className="logo">
        Ratios
      </BlogName>
      <Nav>
        <Links to="/login">Login</Links>
        <Links to="/register">Register</Links>
      </Nav>
    </HeaderStyling>
  );
};
const Main = styled.main`
  padding: 10px;
  max-width: 700px;
  margin: 0 auto;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

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
