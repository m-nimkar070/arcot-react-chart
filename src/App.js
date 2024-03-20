import { Chart as ChartJS } from "chart.js/auto";
import BarChart from "./components/BarChart/BarChart";
import PolarAreaChart from "./components/PolarAreaChart/PolarAreaChart";
import PieChart from "./components/PieChart/PieChart";
import LineChart from "./components/LineChart/LineChart";
import DoughnutChart from "./components/Doughnut/DoughnutChart";

function App() {
  
  return (
    <div className="App grid gap-y-2 p-1">
      <BarChart />
      <LineChart />
      <div className="grid grid-cols-3 sm:grid-rows-3 gap-px justify-items-center py-2 ">
        <PolarAreaChart />
        <PieChart />
        <DoughnutChart />
      </div>
    </div>
  );
}

export default App;
