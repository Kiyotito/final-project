import AboutBanner from "../components/AboutBanner";
import Entry from "../components/Entry";
import { useState, useEffect } from "react"
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const IndexPage = () => {
    
    const [ allPosts, setAllPosts] = useState([])
    const {user} =useContext(UserContext);

    useEffect(()=>{ 

        const getAllPosts = () => {
            fetch("/get-all-posts")
            .then((Response) =>{
                if (Response.ok) {
                    return Response.json()
                } else {
                    throw new Error(`Could not retrieve items: ${Response.status}`)
                }
            })
            .then((data) =>{
                if (data.status === 200) {
                    setAllPosts(data.data)
                }
                else {
                    console.error("Invalid Request:", data)
                }
            })
            .catch((Error)=>{
                console.error("Invalid Data recieved:", Error)
            })
        }
        getAllPosts()
    }, []);

    return(
        <div>
        {
         allPosts.length >= 1 ?
            allPosts.map((item)=>{
                return (
                <Entry 
                title = {item.content.title}
                summary = {item.content.summary}
                imgURL = {item.content.imgURL}
                _id = {item._id}
                text = {item.content.text}
                author = {item.content.author}
                date = {item.content.date}
                />   
                );
            })
         :
         <div>loading...</div>
        }
        
        </div>
    )

}

export default IndexPage;