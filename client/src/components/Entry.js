import { Link } from "react-router-dom";
import styled from "styled-components";


const Entry = ({title,summary,imgURL,_id,author,date}) => {

   return(
       <Post>
       <Links to ={`/post/${_id}`}><Img src={imgURL} alt=""/></Links> 
       <Text>
       <Links to ={`/post/${_id}`}><Title>{title}</Title></Links>
       <Summary>{summary}</Summary>
       <Info>
       <Author>{author}</Author>
       <Time>{date}</Time>
       </Info>
       </Text>
       </Post> 
   )


}


const Img = styled.img`
 max-width: 100%;
 max-height: 100%;
 border-radius: 25px;
 @media (max-width: 750px){
max-width: 50%;
 max-height: 50%;
 display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

`;


const Post = styled.div`
 display: grid;
 grid-template-columns: 50% 50%;
 gap: 20 px;
 height: 150 px;
 background-color: #D46634;
 border-radius: 25px;
 padding: 25px;
 margin-top: 20px;
 &:hover{
 background-color: #A6481E;
 border: #D46634 5px solid ;
 }
 @media (max-width: 750px){
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
`;


const Author = styled.a`
font-weight: 900;
margin: 0;
`;
const Time = styled.p`
margin: 0;
`;


const Info = styled.div`
color: lightgray;
margin-bottom: 10px;
font-size: .75rem;
display: flex;
flex-direction: row;
gap: 10px;
`;


const Text = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 50px;
`;


const Title = styled.h2`
font-size: 2rem;
margin-bottom: 10px;
`;


const Summary = styled.p`
font-size: 1rem;
margin-bottom: 10px;
`;


const Links = styled(Link)`
text-decoration: none;
color: inherit;
@media (max-width: 750px){
margin-top: 25px;
}
`
export default Entry;
