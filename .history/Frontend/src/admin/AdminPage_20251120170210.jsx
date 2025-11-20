import {Outlet} from "react-router"
import AdminSidebar from "./AdminSideBar"
export default function AdminPage()
{
    return (
        <div></div>
      <div>
        <AdminSidebar />
      </div>
      <div>
        <Outlet/>
      </div>
    );
}