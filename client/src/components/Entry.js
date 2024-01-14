import styled from "styled-components";

const Entry = ({title,summary,imgURL}) => {

    return(
        <Post>
        <Img src="http://tinyurl.com/mpevvp49" alt=""/>
        <Text>
        <Title>{title}</Title>
        <Info>
        <Author>Koichi Sato</Author>
        <Time>January 11th 2023</Time>
        </Info>
        <p>{summary}</p>
        </Text>
        </Post>  
    )

}

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