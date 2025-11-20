import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./website/HomePage";
import AdminSidebar from "./admin/AdminSideBar";
AdminSidebar

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/" element={<AdminSidebar />}>
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App
