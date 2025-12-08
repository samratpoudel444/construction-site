import DoughnutChart from "./components/DoughNut";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";


const items = [
  {
    name: "Show Projects",
    link: "/admin/showprojects",
  },
  {
    name: "Show Images",
    link: "/admin/showimages",
  },
  {
    name: "Show Users ",
    link: "/admin/showusers",
  },
  {
    name: "Show Events",
    link: "/admin/showevents",
  },
  {
    name: "Show Staffs",
    link: "/admin/showstaffs",
  },
  {
    name: "Approve Users",
    link: "/admin/showusers",
  },
];


const AdminDashboard= ()=>{
    return (
      <div className="">
        <div className="h-24 bg-gray-200 flex items-center justify-center">
          <h1 className="text-center text-3xl font-semibold ">Dashboard</h1>
        </div>
        <div className="flex flex-col justify-center items-center sm:mt-8 m-4">
          <DoughnutChart />
          <h1 className="text-2xl">Total Projects</h1>
        </div>

        <div className="sm:grid sm:grid-cols-3 flex flex-col m-4 p-2 gap-4">
          {items.map((data, index) => (
            <div
              key={index}
              className="border p-8 flex flex-col justify-between w-full h-64 rounded-2xl"
            >
              <h1>{data.name}</h1>
              <a className="flex flex-row">
                <Link to={data.link}>
                  View Full list <FaArrowRight />
                </Link>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
}

export default AdminDashboard;