import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/aiDataSlice";
import { Doughnut} from "react-chartjs-2";
import Spinner from "../Spinner";

const DoughnutChart = () => {
  const dispatch = useDispatch();
  //Getting a state from store
  const state = useSelector((state) => state);

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
  // console.log("Bar", state);

  
  return (
    <div className="flex justify-center items-center w-8/12 relative">
      <div className="w-full  max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-lg font-semibold text-gray-800">User Statistics</h2>
        <div className="p-6">
          <h2>
          By Platform
          </h2>
          <div className="mt-4">
            <Doughnut
              data={{
                labels: Object.keys(state.data.usage_statistics.by_platform),
                datasets: [
                  {
                    label: 'Ratings',
                    data: Object.values(state.data.usage_statistics.by_platform),
                    backgroundColor: [
                      "#4ADE80",
                      "#F59E0B",
                      "#EF4444",
                    ],
                    hoverBackgroundColor: [
                      "#0EAA00",
                      "#FF8000",
                      "#B24444",
                    ],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
