import DoughnutChart from "./components/DoughNut";

const items = [
  {
    name: "Show Projects",
    link: "/showprojects",
  },
  {
    name: "Show Images",
    link: "/showImages",
  },
  {
    name: "Show Users ",
    link: "/show",
  },
  {
    name: "Show Events",
    link: "",
  },
  {
    name: "Show Staffs",
    link: "",
  },
  {
    name: "Approve Users",
    link: "",
  },
];


const AdminDashboard= ()=>{
    return (
      <div className="">
        <div className="h-24 bg-gray-200 flex items-center justify-center">
            <h1 className="text-center text-3xl font-semibold ">Dashboard</h1>
        </div>
            <div className="flex justify-center items-center mt-8">
                <DoughnutChart/>
            </div>

            <div className="">

            </div>

      </div>
    );
}

export default AdminDashboard;