import { useEffect } from "react";
import styled from "styled-components";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Entry from "./Entry";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";

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
        </Route>
      </Routes>
    
  );
}

const Main = styled.main`
  padding: 10px;
  max-width: 700px;
  margin: 0 auto;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export default App;
