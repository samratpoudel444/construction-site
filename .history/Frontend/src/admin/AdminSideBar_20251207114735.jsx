import image from "../assets/logo.png"

const sidebarItems = [
  {
    name: "Dashboard",
    link: "",
  },
  {
    name: "Add Projects",
    link: "",
  },
  {
    name: "Add Images",
    link: "",
  },
  {
    name: "Create Account",
    link: "",
  },
  {
    name: "Create Events",
    link: "",
  },
  {
    name: "Add Staffs",
    link: "",
  },
];

const AdminSidebar= ()=>
{
    return (
      <div className=" h-screen w-72 bg-blue-500">
        <div className="flex items-center justify-start border-b-4 border-b-blue-900">
          <img src={image} alt="" className="w-1/2" />
          <h1 className="text-2xl text-white">IDCD</h1>
        </div>

        <div className="text-xl text-white font-semibold mt-8 flex flex-col items-center justify-center gap-">
            {sidebarItems.map((items, index)=>
            (
                <div>
                    {items.name}
                </div>
            ))}
        </div>

        <div>

        </div>
      </div>
    );
}

export default AdminSidebar;