function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  // Sort both strings and compare them
  return s.split("").sort().join("") === t.split("").sort().join("");
}
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
