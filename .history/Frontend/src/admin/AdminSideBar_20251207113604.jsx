import image from "../assets/logo.png"

const AdminSidebar= ()=>
{
    return (
      <div className=" h-screen w-92 bg-blue-500">
        <div className="flex items-center justify-start">
          <img src={image} alt="" className="w-1/2" />
          <h1 className="text-2xl text-white">IDCD</h1>
        </div>
      </div>
    );
}

export default AdminSidebar;