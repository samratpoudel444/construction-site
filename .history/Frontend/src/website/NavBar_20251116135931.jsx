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
    return(
        <div className="w-full ">
            <div className="flex flex-row" >
                <img src={logo} alt="" className="h-40" />
                <a href=""></a>
            </div>
            <div>

            </div>
        </div>
    )
}

export default NavBar;