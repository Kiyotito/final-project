import AboutBanner from "../components/AboutBanner";
import Entry from "../components/Entry";
import { useState, useEffect } from "react"

const IndexPage = () => {
    
    const [ allPosts, setAllPosts] = useState([])

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

    console.log(allPosts);
    return(
        <div>
        {
         allPosts.length >= 1 ?
            allPosts.map((item)=>{
            console.log(item.content.imgURL)
                return (
                <Entry 
                title = {item.content.title}
                summary = {item.content.summary}
                imgURL = {item.content.imgURL}
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