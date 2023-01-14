import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";
import { useState } from "react";


function App() {
  const [passDataPost, setPassDataPost] = useState({})
  const handlePostExpenseUpParent = (dataPost) => {
    setPassDataPost(dataPost);
  }

  return (
    <div className="container-app">
      <Header handlePostExpenseUpParent = {handlePostExpenseUpParent}></Header>
      <Body getDataPost = {passDataPost}></Body>
    </div>
  )
}

export default App