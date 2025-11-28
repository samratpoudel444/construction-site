import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./website/HomePage";
import AdminSidebar from "./admin/AdminSideBar";
import Activities from "./website/Activities";


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/activities" element={<OurActivities />}></Route>
        <Route path="/admin" element={<AdminSidebar />}></Route>
      </Routes>
    </Router>
  );
}

export default App
