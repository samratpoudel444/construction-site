import { Outlet } from "react-router";
import AdminSidebar from "./AdminSideBar";

export default function AdminPage() {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="ml-72 w-full p-6">
        <Outlet />
      </div>
    </div>
  );
}
