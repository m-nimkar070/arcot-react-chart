import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/aiDataSlice";
import { PolarArea} from "react-chartjs-2";
import Spinner from "../Spinner";

const PolarAreaChart = () => {


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
    <div className="flex justify-center items-center w-8/12 ">
      <div className="w-full  max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-800">
            User Satisfaction
          </h2>
        <div className="p-6">
          <h2>Star Ratings</h2>
          <div className="mt-4">
            <PolarArea
              data={{
                labels: state.data.user_satisfaction.ratings.map((item)=> item.rating),
                datasets: [
                  {
                    label: 'Ratings',
                    data: state.data.user_satisfaction.ratings.map((item)=> item.count),
                    backgroundColor: [
                      "#4ADE80",
                      "#F59E0B",
                      "#EF4444",
                      "#6366F1",
                      "#348F35",
                    ],
                    hoverBackgroundColor: [
                      "#0EAA00",
                      "#FF8000",
                      "#B24444",
                      "#6366A1",
                      "#348F12",
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolarAreaChart;
