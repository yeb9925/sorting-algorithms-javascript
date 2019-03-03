//
// Selection Sort Implementation
//

function selectionSort (unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  for (let i = 0; i < unsortedArray.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < unsortedArray.length; j++) {
      if (unsortedArray[j] < unsortedArray[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the current element with the smaller element
    [unsortedArray[i], unsortedArray[minIndex]] = [unsortedArray[minIndex], unsortedArray[i]]; // ES6 Swap
  }

  return unsortedArray;
}
