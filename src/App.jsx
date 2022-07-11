import { Header } from "./components/Header";
import { Post } from "./Post"
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <Post 
        author="James" 
        content="lorem"
      />
      <Post 
        author="Robert" 
        content="testasd asd as"
      />
    </>
  )
}

export default App
