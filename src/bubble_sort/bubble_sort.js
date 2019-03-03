//
// Bubble Sort Implementation
//

function bubbleSort (unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  for (let i = 0; i < unsortedArray.length; i++) {
    for (let j = 0; j < (unsortedArray.length - i - 1); j++) {
      // Swap if the element is larger than the element right next to it
      if (unsortedArray[j] > unsortedArray[j+1]) {
        [unsortedArray[j], unsortedArray[j+1]] = [unsortedArray[j+1], unsortedArray[j]]; // ES6
      }
    }
  }

  return unsortedArray;
}
