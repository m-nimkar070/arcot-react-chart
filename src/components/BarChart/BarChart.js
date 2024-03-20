import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/aiDataSlice";
import { Bar } from "react-chartjs-2";
import Spinner from "../Spinner";

const BarChart = () => {
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
    <div className="flex justify-center">
      <div className="w-full sm:max-w-xl  md:max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Category Distribution
          </h2>
          <div className="mt-4">
            <Bar
              data={{
                labels: Object.keys(state.data.category_distribution),
                datasets: [
                  {
                    label: 'Category Distribution',
                    data: Object.values(state.data.category_distribution),
                    backgroundColor: [
                      "#4ADE80",
                      "#F59E0B",
                      "#EF4444",
                      "#6366F1",
                    ],
                    hoverBackgroundColor: [
                      "#0EAA00",
                      "#FF8000",
                      "#B24444",
                      "#6366A1",
                    ],
                    borderColor: "808080",
                    borderRadius: 10,
                    barThickness: 40,
                    borderWidth:1
                  },
                ],
              }}
              options={{
                responsive:true,
                maintainAspectRatio:false,
                plugins: {
                  legend: {
                    display: false,
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

export default BarChart;
