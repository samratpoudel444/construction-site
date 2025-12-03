import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./website/HomePage";
import AdminSidebar from "./admin/AdminSideBar";
import About from "./website/About";
import ProjectPage from "./website/webPages/projectPage/ProjectPage";
import GalleryPage from "./website/webPages/galleryPage/GalleryPage";
GalleryPage


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Project" element={<ProjectPage />}></Route>
        <Route path="/gallery" element={<ProjectPage />}></Route>
        <Route path="/admin" element={<AdminSidebar />}></Route>
      </Routes>
    </Router>
  );
}

export default App
