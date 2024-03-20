import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/aiDataSlice";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import Spinner from "../Spinner";

const LineChart = () => {
  const dispatch = useDispatch();
  //Getting a state from store
  const state = useSelector((state) => state);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler // Registering the Filler plugin
  );
  

  useEffect(() => {
    // Dispatching a fetchData method trigger a api call and update the store state
    dispatch(fetchData());
  }, [dispatch]);

  // Spinner effect added until we get state from store
  if (!state.data) {
    return (
      <Spinner />
    );
  }
  console.log(
    "Line",
    state.data.response_times.day_wise.map((item) => item.date)
  );

  return (
    <div className="flex justify-evenly items-center">
      <div className="w-full mx-1 bg-white shadow-md rounded-lg overflow-hidden relative">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Response Times
          </h2>
          <div className="mt-4">
            <Line
              data={{
                labels: state.data.response_times.day_wise.map(
                  (item) => item.date
                ),
                datasets: [
                  {
                    label: "Response Time By Date",
                    data: state.data.response_times.day_wise.map(
                      (item) => item.average_time
                    ),
                    backgroundColor: "#000000",
                    borderColor: "#15A3C7",
                    fill: {
                      target: 'origin',
                      above: 'lightgreen', // Area will be red above the origin
                      below: '#000000', // And blue below the origin
                    },
                  },
                ],
                options: {
                  responsive: true,
                  maintainAspectRatio: false,
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className="w-full mx-1 bg-white shadow-md rounded-lg overflow-hidden relative">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Response Times
          </h2>
          <div className="mt-4">
            <Line
              data={{
                labels: state.data.response_times.week_wise.map(
                  (item) => item.week
                ),
                datasets: [
                  {
                    label: "Response Time By  Week",
                    data: state.data.response_times.week_wise.map(
                      (item) => item.average_time
                    ),
                    backgroundColor: "#FFFFFF",
                    borderColor: "#FF0000",
                    tension: 0.1,
                    fill: false,
                  },
                ],
                options: {
                  responsive: true,
                  maintainAspectRatio: true,
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
