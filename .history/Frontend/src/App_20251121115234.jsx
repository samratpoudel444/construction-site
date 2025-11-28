import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./website/HomePage";
import AdminSidebar from "./admin/AdminSideBar";
import About from "./website/About";



function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<OurActivities />}></Route>
        <Route path="/admin" element={<AdminSidebar />}></Route>
      </Routes>
    </Router>
  );
}

export default App
