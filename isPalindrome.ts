function isPalindrome(s) {
  let normalizedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let reversedString = normalizedString.split("").reverse().join("");

  return normalizedString === reversedString;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(""));
