//function that finds the first unique character in a given string. If no unique character exists, return -1.


function firstUniqueCharacter(s: string): number {
    const charCount: { [key: string]: number } = {};

    // Count the frequency of each character
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the index of the first unique character
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i; // Return the index of the first unique character
        }
    }

    return -1; // If no unique character exists
}

// Example usage:
console.log(firstUniqueCharacter("leetcode")); // Output: 0 (The first unique character is 'l')
console.log(firstUniqueCharacter("loveleetcode")); // Output: 2 (The first unique character is 'v')
console.log(firstUniqueCharacter("aabbcc")); // Output: -1 (No unique character exists)
