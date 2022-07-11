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
  const [currentStep, setCurrentStep] = useState(input);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [intervalId, setIntervalId] = useState(null);

  const ALGOS = [
    { name: "Bubble Sort", algo: bubbleSort },
    { name: "Selection Sort", algo: selectionSort },
    { name: "Insertion Sort", algo: insertionSort },
  ];

  useEffect(() => {
    if (steps.length) {
      let i = 0;
      const interval = setInterval(() => {
        if (i === steps.length - 1) {
          clearInterval(intervalId);
        }
        setCurrentStep(steps[i]);
        i++;
      }, 100);
      setIntervalId(interval);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [steps]);

  const algoSelectHdlr = (e) => {
    setSteps([]);
    clearInterval(intervalId);
    setSelectedAlgorithm(e.target.id);
    const algorithm = ALGOS.find((a) => a.name === e.target.id).algo;
    setSteps(algorithm(input));
  };

  return (
    <div className="h-screen w-screen flex items-center flex-col bg-black text-[#77898B]">
      <div className="mt-12 mb-6 text-4xl font-bold flex w-full justify-around">
        {ALGOS.map((algo) => (
          <div
            key={algo.name}
            id={algo.name}
            onClick={algoSelectHdlr}
            className={
              selectedAlgorithm === algo.name
                ? "border-b-4 border-[#77898B]"
                : ""
            }
          >
            {algo.name}
          </div>
        ))}
      </div>
      <div className="flex">
        {currentStep.map((step, idx) => (
          <>
            <div
              className="w-12 relative border border-black bg-[#77898B] mt-auto text-sm rounded-t-sm"
              style={{ height: step * 7 }}
              key={idx}
            >
              <span className="text-xl font-semibold absolute bottom-[-40px]">
                {step}
              </span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
