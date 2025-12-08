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

import AdminPage from "./admin/sidebar/AdminPage";
import AdminDashboard from "./admin/sidebar/AdminDashboard";
import AddProjects from "./admin/sidebar/AddProjects";
import AddImages from "./admin/sidebar/AddImages";
import CreateAccount from "./admin/sidebar/CreateAccount";
import CreateEvent from "./admin/sidebar/CreateEvents";
import AddStaffs from "./admin/sidebar/AddStaffs";
import ShowProjects from "./admin/Dashboard/ShowProjects";
import ApproveUsers from "./admin/Dashboard/ApproveUsers";
import ShowImages from "./admin/Dashboard/ShowImages";
import ShowUsers from "./admin/Dashboard/ShowUsers";
import ShowStaffs from "./admin/Dashboard/ShowStaffs";
Show



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
          <Route path="createEvents" element={<CreateEvent />} />
          <Route path="addstaffs" element={<AddStaffs />} />

          <Route path="showprojects" element={<ShowProjects />} />
          <Route path="approveusers" element={<ApproveUsers />} />
          <Route path="showImages" element={<ShowImages />} />
          <Route path="showUsers" element={<ShowUsers />} />
          <Route path="showStaffs" element={<ShowStaffs />} />
          <Route path="showStaffs" element={<ShowEvents />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
