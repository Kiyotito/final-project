import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const IndividualPost = () => {
  const [post, setPost] = useState();
  const { id } = useParams();

useEffect(()=>{
 fetch(`/get-a-post/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Could not retrieve post!");
      }
    })
    .then((data) => {
      setPost(data.data);
      console.log(data.data)
    })
    .catch((error) => {
      console.error("Invalid Data Received:", error);
    });
},[])

  return ( 
  <div>
  {
    post ?
    <>
    <div>{post.content.title}</div>
    <div>{post.content.summary}</div>
    </>
    :
    <div>Loading</div>
  }
  </div>
  )
};

export default IndividualPost;
