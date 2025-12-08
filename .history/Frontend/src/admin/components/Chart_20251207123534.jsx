import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data=[{completed:1, running:1, }]


const DoughnutChart = () => {
  const data = {
    labels: ["Completed", "Pending", "Failed"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: [
          "#34d399",
          "#fbbf24",
          "#f87171",
        ],
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
