import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AllPosts from "./pages/allPosts/AllPosts";
import NavBar from "./layouts/nav/NavBar";
import Contact from "./pages/contact/Contact";
import PostPage from "./pages/postPage/PostPage";

function App() {
  return (
    <Routes className="App">
      <Route element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
