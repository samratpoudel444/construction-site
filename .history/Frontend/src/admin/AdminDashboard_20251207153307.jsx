import DoughnutChart from "./components/DoughNut";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";


const items = [
  {
    name: "Show Projects",
    link: "/showprojects",
  },
  {
    name: "Show Images",
    link: "/showimages",
  },
  {
    name: "Show Users ",
    link: "/showusers",
  },
  {
    name: "Show Events",
    link: "/showevents",
  },
  {
    name: "Show Staffs",
    link: "/showstaffs",
  },
  {
    name: "Approve Users",
    link: "/showusers",
  },
];


const AdminDashboard= ()=>{
    return (
      <div className="">
        <div className="h-24 bg-gray-200 flex items-center justify-center">
          <h1 className="text-center text-3xl font-semibold ">Dashboard</h1>
        </div>
        <div className="flex justify-center items-center mt-8">
          <DoughnutChart />
        </div>

        <div className="grid grid-cols-3 m-4 gap-4">
          {items.map((data, index) => (
            <div
              key={index}
              className="border p-8 flex flex-col justify-between w-full h-64 rounded-2xl"
            >
              <h1>{data.name}</h1>
              <a className="flex flex-row">
                <Link>
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