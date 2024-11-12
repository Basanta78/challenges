function findUniqueElement(arr: number[]): number {
  const frequencyMap: { [key: number]: number } = {};

  // Count the frequency of each element
  for (let num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  for (let num in frequencyMap) {
    if (frequencyMap[num] === 1) {
      return parseInt(num);
    }
  }

  return -1;
}

const arr = [1, 1, 2, 2, 3, 3, 4, 5, 5];
console.log(findUniqueElement(arr));
