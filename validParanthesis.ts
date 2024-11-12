function isValid(s: string): boolean {
  const stack: string[] = [];

  const bracketMap: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (bracketMap[char]) {
      const topElement = stack.pop();

      if (topElement !== bracketMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
