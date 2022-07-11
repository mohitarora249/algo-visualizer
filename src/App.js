import React, { useState, useEffect } from "react";
import bubbleSort from "./sort-algos/bubble_sort";
import selectionSort from "./sort-algos/selection_sort";
import insertionSort from "./sort-algos/insertion_sort";

function App() {
  const input = [
    5, 3, 6, 1, 2, 7, 8, 9, 99, 66, 44, 13, -15, -10, 10, 25, 35, 67, 98, 66,
    85, 100, 49, 75, 69,
  ];
  const [steps, setSteps] = useState([]);
  const [current, setCurrent] = useState([]);
  useEffect(() => {
    setSteps(bubbleSort([...input]));
  }, []);

  useEffect(() => {
    let interval = null;
    if (steps.length) {
      let i = 0;
      interval = setInterval(() => {
        if (i === steps.length - 1) {
          clearInterval(interval);
        }
        setCurrent(steps[i]);
        i++;
      }, 100);
    }
    return () => {
      clearInterval(interval);
    };
  }, [steps]);

  return (
    <div className="h-screen w-screen flex items-center flex-col bg-black text-[#77898B]">
      <div className="mt-12 mb-6 text-md font-bold text-4xl">
        INSERTION SORT
      </div>
      <div className="flex">
        {current.map((x, idx) => (
          <>
            <div
              className="w-12 relative border border-black bg-[#77898B] mt-auto text-sm rounded-t-sm"
              style={{ height: x * 7 }}
              key={idx}
            >
              <span className="text-xl font-semibold absolute bottom-[-40px]">
                {x}
              </span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
