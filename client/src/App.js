import { useEffect } from "react";
import styled from "styled-components";

function App() {
  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <Main>
      <Header>
        <BlogName href="" className="logo">
          My Blog
        </BlogName>
        <Nav>
          <Links href="">Login</Links>
          <Links href="">Register</Links>
        </Nav>
      </Header>
      <Post>
      <Img src="https://styles.redditmedia.com/t5_95mk3f/styles/communityIcon_fb78be7pwqjb1.png" alt=""/>
      <Text>
      <Title>Sailor Moon Is The Greatest Hero</Title>
      <Info>
      <Author>Koichi Sato</Author>
      <Time>January 11th 2023</Time>
      </Info>
      <p>The series follows the adventures of the titular protagonist whose name is Usagi Tsukino, a middle school student who is given the power to become a Pretty Soldier. Joined by other Sailor Soldiers, she defends Earth against an assortment of evil villains. The anime also parallels the maturation of Usagi from an emotional middle school girl to a responsible young adult.</p>
      </Text>
      </Post>
      
    </Main>
  );
}

const Main = styled.main`
  padding: 10px;
  max-width: 700px;
  margin: 0 auto;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const Header = styled.main`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-top: 20px;
  align-items: center;
`;
const Links = styled.a`
  text-decoration: none;
  color: inherit;
`;
const BlogName = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  font-size: 1.5rem;
`;
const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const Post = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 20px;
  margin-bottom:30px;
`;

const Author = styled.a`
 font-weight: 900;
 margin: 0;
`;
const Time = styled.p`
 margin: 0;
`;
const Info = styled.p`
 color: lightgray;
 margin-bottom: 10px;
 font-size: .75rem;
 display: flex;
 flex-direction: row;
 gap: 10px;
`;

const Text = styled.div`
 margin: 0;
`;

const Title = styled.h2`
 font-size: 2rem;
 margin: 10px 0px;
`;
export default App;
