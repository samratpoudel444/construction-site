import logo from "./../assets/pngtree-building-and-construction-logo-design-template-with-wave-sign-dark-blue-png-image_5137679.jpg";

const NavBar= ()=>
{
    const navItems = [
      {
        name: "Home",
        link: "",
      },
      {
        name: "About Us",
        link: "",
      },
      {
        name: "Projects",
        link: "",
      },
      {
        name: "Gallery",
        link: "",
      },
      {
        name: "Login",
        link: "",
      },
    ];
    return (
      <div className="w-full flex flex-row justify-between ">
        <div className="flex flex-row items-center ">
          <img src={logo} alt="" className="h-40" />
          <div className="flex flex-col text-md font-semibold">
            <h1 className="text-center">Indrakshi Divya </h1>
            <h1 className="text-blue-800">Construction PVT.LTD </h1>
          </div>
        </div>
        <div>
            {navItems.map((item, index)=>
            {
                <a key={index}>{item.name}</a>
            })}
        </div>
      </div>
    );
}

export default NavBar;