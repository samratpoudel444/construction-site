import {Outlet} from "react-router"
import AdminSidebar from "./AdminSideBar"
export default function AdminPage()
{
    return (
      <div className="flex f">
        <div>
          <AdminSidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
}