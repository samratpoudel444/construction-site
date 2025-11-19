import logo from "./../assets/logo.png"
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
      <div className="w-full flex flex-row justify-between items-center pr-16 absolute text-white">
        <div className="flex flex-row items-center ">
          <img src={logo} alt="" className="h-32" />
          <div className="flex flex-col text-xl font-semibold">
            <h1 className="text-center">Indrakshi Divya </h1>
            <h1 className"">Construction PVT.LTD </h1>
          </div>
        </div>
        <div className="sm:flex sm:gap-16 sm:text-xl sm:font-semibold hidden ">
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
      </div>
    );
}

export default NavBar;