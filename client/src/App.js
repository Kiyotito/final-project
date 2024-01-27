import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Profile from "./pages/Profile";
import CreateNewPost from "./pages/CreateNewPost";
import IndividualPost from "./pages/IndividualPost";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "./context/UserContext";
import { useContext, useEffect } from "react";

function App() {

  const { user: UserFromAuth0} = useAuth0();
  const {createUserAndRecieveInfo } = useContext(UserContext);
  //need to create page for individual posts and change route that includes /post/:id
 
  useEffect(() => {
    if (UserFromAuth0) {
      createUserAndRecieveInfo(UserFromAuth0);
    }
  }, [UserFromAuth0]);
  
  console.log(UserFromAuth0);

  return (
    
      <Routes>
        <Route path="/" element ={<Layout/>}>
          <Route index element ={<IndexPage/>}/>
          <Route path ='/Profile'element ={<Profile/>}/>
          <Route path ='/Create-New-Post'element ={<CreateNewPost/>}/>
          <Route path="/post/:id" element={<IndividualPost/>} />
        </Route>
      </Routes>
    
  );
}

export default App;
