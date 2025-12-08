import DoughnutChart from "./components/Chart";


const AdminDashboard= ()=>{
    return (
      <div className="">
        <div className="h-24 bg-gray-200 flex items-center justify-center">
            <h1 className="text-center text-3xl font-semibold ">Dashboard</h1>
        </div>
            <div>
                <DoughnutChart>
            </div>

      </div>
    );
}

export default AdminDashboard;