import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const datas=[{completed:1, running:1, Pending:1}]

console.log("shhshhsh",datas[0].completed)

const DoughnutChart = () => {
  const data = {
    labels: ["completed", "running", "Pending"],
    datasets: [
      {
        data: [datas.completed, datas.running, datas.pending],
        backgroundColor: ["#34d399", "#fbbf24", "#f87171"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="w-80">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
