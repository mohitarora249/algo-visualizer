const selectionSort = (arr) => {
  const steps = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        steps.push([...arr]);
      }
      steps.push([...arr]);
    }
  }
  return steps;
};

export default selectionSort;
