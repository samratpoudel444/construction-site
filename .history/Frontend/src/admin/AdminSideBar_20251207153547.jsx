import image from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const sidebarItems = [
  { name: "Dashboard", link: "/admin/dashboard" },
  { name: "Add Projects", link: "/admin/addprojects" },
  { name: "Add Images", link: "/admin/addImages" },
  { name: "Create Account", link: "/admin/createAccount" },
  { name: "Create Events", link: "/admin/createevents" },
  { name: "Add Staffs", link: "/admin/addstaffs" },
];

const AdminSidebar = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-72 bg-blue-500 fixed sm:hidden">

      <div className="flex items-center gap-2 border-b-2 border-amber-50 p-4">
        <img src={image} alt="logo" className="w-1/2" />
        <h1 className="text-2xl text-white font-bold">IDCD</h1>
      </div>

      <div className="text-xl text-white font-semibold mt-8 flex flex-col items-center gap-4">
        {sidebarItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              `
              p-4 w-[90%] text-center rounded-2xl transition-all cursor-pointer
              ${
                isActive
                  ? "bg-white text-black"
                  : "hover:bg-white hover:text-black"
              }
              `
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="border-t-2 border-amber-50 p-4">
        <div className="flex items-center gap-2 justify-center hover:scale-105 transition text-white text-xl">
          <img src={image} alt="user" className="w-1/4" />
          <h1>Samrat Poudel</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
