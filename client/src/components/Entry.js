import styled from "styled-components";

const Entry = () => {

    return(
        <Post>
        <Img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        <Text>
        <Title>Old Fashioned</Title>
        <Info>
        <Author>Koichi Sato</Author>
        <Time>January 11th 2023</Time>
        </Info>
        <p>The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey, and garnishing with an orange slice or zest and a cocktail cherry. It is traditionally served with ice in an old fashioned glass.</p>
        </Text>
        </Post>  
    )

}

const Main = styled.main`
  padding: 10px;
  max-width: 700px;
  margin: 0 auto;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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
 margin-bottom: 10px;
`;

export default Entry;