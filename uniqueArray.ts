/**
 * Removes duplicate elements from the given array and returns a new array with only unique elements.
 * @param arr - The input array to remove duplicates from.
 * @returns A new array containing only the unique elements from the input array.
 */
function findUnique(arr: number[]): number[] {
  // Count occurrences of each number
  const counts: { [key: number]: number } = {};
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });

  // Filter to retain only numbers that appear exactly once
  const uniqueNumbers = arr.filter((num) => counts[num] === 1);

  return uniqueNumbers;
}
//
console.log(findUnique([4, 3, 2, 4, 1, 3, 5, 6, 5]));
