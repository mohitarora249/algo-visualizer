const insertionSort = (arr) => {
  const steps = [];
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
      steps.push([...arr]);
    }
    arr[j + 1] = current;
    steps.push([...arr]);
  }
  return steps;
};

export default insertionSort;
