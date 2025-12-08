import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./website/HomePage";
import AdminSidebar from "./admin/AdminSideBar";
import About from "./website/About";
import ProjectPage from "./website/webPages/projectPage/ProjectPage";
import GalleryPage from "./website/webPages/galleryPage/GalleryPage";
import LoginPage from "./website/webPages/loginPage/LoginPage";
import AdminDashboard from "./admin/AdminDashboard";



function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Project" element={<ProjectPage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/Login" element={<LoginPage />}></Route>

        <Route path="/admin" element={<AdminSidebar />}>
          <Route path="/dashboard" element={<AdminDashboard />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App
