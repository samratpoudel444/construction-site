import { useState } from "react";
import image from "../assets/logo.png"
import { NavLink } from "react-router-dom";

const sidebarItems = [
  {
    name: "Dashboard",
    link: "\dashboard",
  },
  {
    name: "Add Projects",
    link: "\addprojects",
  },
  {
    name: "Add Images",
    link: "\addImages",
  },
  {
    name: "Create Account",
    link: "\createAccount",
  },
  {
    name: "Create Events",
    link: "\createevents",
  },
  {
    name: "Add Staffs",
    link: "\addstaffs",
  },
];

const AdminSidebar= ()=>
{
    const [active,setActive]= useState(0);
    return (
      <div className="flex flex-col justify-between h-screen w-72 bg-blue-500 fixed">
        <div className="flex items-center justify-start border-b-2 border-b-amber-50">
          <img src={image} alt="" className="w-1/2" />
          <h1 className="text-2xl text-white">IDCD</h1>
        </div>

        <div className="text-xl text-white font-semibold mt-8 flex flex-col items-center justify-start gap-8">
          {sidebarItems.map((items, index) => (
            <NavLink className={`hover:text-black hover:bg-white p-4 w-[90%] text-center rounded-4xl ${ac}`} key={index}
            onClick={setActive(index)}>{items.name}</NavLink>
          ))}
        </div>

        <div className="border-t-2 border-t-amber-50 ">
          <div className="flex flex-row items-center justify-center hover:scale-105 text-white text-xl">
            <img src={image} alt="" className="w-1/4 " />
            <h1>Samrat Poudel </h1>
          </div>
        </div>
      </div>
    );
}

export default AdminSidebar;