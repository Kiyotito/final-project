import { useEffect } from "react";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import CreateNewPost from "./pages/CreateNewPost";

function App() {

  return (
    
      <Routes>
        <Route path="/" element ={<Layout/>}>
          <Route index element ={<IndexPage/>}/>
          <Route path ='/login'element ={<LoginPage/>}/>
          <Route path ='/register'element ={<div>Register Page</div>}/>
          <Route path ='/Profile'element ={<Profile/>}/>
          <Route path ='/Create-New-Post'element ={<CreateNewPost/>}/>
        </Route>
      </Routes>
    
  );
}

export default App;
