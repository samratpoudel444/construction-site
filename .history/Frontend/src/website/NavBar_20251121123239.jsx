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

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full absolute top-0 left-0">
      {/* NAVBAR */}
      <div className="flex justify-between items-center sm:px-8 sm:py-4 px-4 py-3">
        {/* Logo + Title */}
        <div className="flex items-center sm:gap-4 gap-2">
          <img src={logo} alt="IDCD Logo" className="h-20 sm:h-28" />

          <div className="flex flex-col font-semibold">
            <h1 className="hidden sm:block sm:text-xl sm:leading-tight">
              Indraakshi Divya Construction <br /> & Development Pvt.Ltd.
            </h1>
            <h1 className="text-xl sm:hidden">IDCD Pvt.Ltd.</h1>
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

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button onClick={() => setOpen(!open)}>
            <MenuIcon fontSize="large" />
          </button>
        </div>
      </div>

      {/* FULL SCREEN MOBILE MENU */}
      {open && (
        <div className="absolute w-full h-screen bg-blue-500 left-0 top-0 z-50 sm:hidden flex flex-col gap-16 justify-center items-center text-2xl font-semibold">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-white transition hover:scale-110 duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
