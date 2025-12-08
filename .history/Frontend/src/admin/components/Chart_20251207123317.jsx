import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data= [{
    
}]

const DoughnutChart = () => {
  const data = {
    labels: ["Completed", "Pending", "Failed"],
    datasets: [
      {
        label: "Projects",
        data: [60, 25, 15],
        backgroundColor: [
          "#34d399",
          "#fbbf24", // yellow
          "#f87171", // red
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%", // thickness
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
