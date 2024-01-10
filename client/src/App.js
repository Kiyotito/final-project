import { useEffect } from "react";

function App() {

useEffect(()=>{

  fetch("/test").then(res=>res.json()).then((data)=>{
    console.log(data)
    })
},[])

  return (
    <div className="App">
      <h1>Content</h1>
    </div>
  );
}

export default App;
