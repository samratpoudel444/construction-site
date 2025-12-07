import image from "../assets/logo.png"

const sidebarItems= [{
    name:"",
    link:""
},
{
    
}]

const AdminSidebar= ()=>
{
    return (
      <div className=" h-screen w-72 bg-blue-500">
        <div className="flex items-center justify-start border-b-4 border-b-blue-900">
          <img src={image} alt="" className="w-1/2" />
          <h1 className="text-2xl text-white">IDCD</h1>
        </div>
      </div>
    );
}

export default AdminSidebar;