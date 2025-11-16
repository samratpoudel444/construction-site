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
            <div>
                <img src={logo} alt="" />
            </div>
            <div>

            </div>
        </div>
    )
}

export default NavBar;