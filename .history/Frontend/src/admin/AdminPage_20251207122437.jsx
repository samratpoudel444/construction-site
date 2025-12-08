import { Outlet } from "react-router";
import AdminSidebar from "./AdminSideBar";

export default function AdminPage() {
  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="ml-72 w-full min-h-screen p-6 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}
