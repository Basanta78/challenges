function romanToInt(s: string): number {
  // Map of Roman numerals and their corresponding integer values
  const romanToIntMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentVal = romanToIntMap[s[i]];
    const nextVal = romanToIntMap[s[i + 1]];

    if (currentVal < nextVal) {
      result -= currentVal;
    } else {
      result += currentVal;
    }
  }

  return result;
}

// Example usage:
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4
