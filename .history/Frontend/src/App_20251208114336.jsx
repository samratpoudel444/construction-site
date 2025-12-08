import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "./website/HomePage";
import About from "./website/About";
import ProjectPage from "./website/webPages/projectPage/ProjectPage";
import GalleryPage from "./website/webPages/galleryPage/GalleryPage";
import LoginPage from "./website/webPages/loginPage/LoginPage";

import AdminPage from "./admin/AdminPage";
import AdminDashboard from "./admin/AdminDashboard";
import AddProjects from "./admin/AddProjects";
import AddImages from "./admin/AddImages";
import CreateAccount from "./admin/CreateAccount";
Creta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="addprojects" element={<AddProjects />} />
          <Route path="addImages" element={<AddImages />} />
          <Route path="createAccount" element={<CreateAccount />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
