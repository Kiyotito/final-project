import { useEffect } from "react";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";

function App() {
  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    
      <Routes>
        <Route path="/" element ={<Layout/>}>
          <Route index element ={<IndexPage/>}/>
          <Route path ='/login'element ={<LoginPage/>}/>
          <Route path ='/register'element ={<div>Register Page</div>}/>
          <Route path ='/Profile'element ={<Profile/>}/>
        </Route>
      </Routes>
    
  );
}

export default App;
