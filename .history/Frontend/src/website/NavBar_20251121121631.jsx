import { useState } from "react";
import logo from "./../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const navItems = [
    { name: "Home", link: "" },
    { name: "About Us", link: "" },
    { name: "Projects", link: "" },
    { name: "Gallery", link: "" },
    { name: "Login", link: "" },
  ];
  const[open, setOpen]= useState(false)
  return (
    <div className="w-full flex justify-between items-center px-8 py-4 absolute">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="IDCD Logo" className="h-28" />

        <div className="flex flex-col font-semibold">
          <h1 className="hidden sm:block sm:text-xl sm:leading-tight">
            Indraakshi Divya Construction <br /> & Development Pvt. Ltd.
          </h1>
          <h1 className="text-xl text-center sm:hidden">IDCD</h1>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-10 text-lg font-semibold">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="hover:text-blue-400 transition hover:scale-110 duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="sm:hidden">
        <button onClick={()=>(setOpen(!open))}>
          <MenuIcon fontSize="large" />
        </button>
      </div>
      {open && <div className="w-full h-full bg-blue"></div>}
    </div>
  );
};

export default NavBar;
