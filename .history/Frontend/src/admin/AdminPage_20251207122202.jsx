import {Outlet} from "react-router"
import AdminSidebar from "./AdminSideBar"
export default function AdminPage()
{
    return (
      <div className="flex flex-row">
        <div>
          <AdminSidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
}