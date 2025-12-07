import image from "../assets/logo.png"

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
    return (
      <div className="flex flex-col justify-between h-screen w-72 bg-blue-500">
        <div className="flex items-center justify-start border-b-2 border-b-amber-50">
          <img src={image} alt="" className="w-1/2" />
          <h1 className="text-2xl text-white">IDCD</h1>
        </div>

        <div className="text-xl text-white font-semibold mt-8 flex flex-col items-center justify-start gap-16">
            {sidebarItems.map((items, index)=>
            (
                <div>
                    {items.name}
                </div>
            ))}
        </div>

        <div className="border-t-2 border-t-amber-50 flex flex-row items-center justify-center">
                <div>
                <img src={image} alt="" className="w-1/4 " />
                <h1>Samrat Poudel </h1>
            
        </div>
      </div>
    );
}

export default AdminSidebar;