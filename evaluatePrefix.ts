function evaluatePrefixExpression(s: string): number | null {
  const tokens = s.split(" ");
  const stack: number[] = [];
  const operators = new Set(["+", "-", "*", "/"]);

  // Traverse tokens from right to left
  for (let i = tokens.length - 1; i >= 0; i--) {
    const token = tokens[i];

    if (operators.has(token)) {
      // Operator: Pop two operands and apply the operation
      const operand1 = stack.pop();
      const operand2 = stack.pop();

      if (operand1 === undefined || operand2 === undefined) {
        return null;
      }

      let result: number;
      switch (token) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          if (operand2 === 0) {
            return null;
          }
          result = Math.floor(operand1 / operand2);
          break;
        default:
          return null;
      }

      stack.push(result); // Push result back to stack
    } else {
      const num = parseInt(token, 10);
      if (isNaN(num)) {
        return null;
      }
      stack.push(num);
    }
  }

  return stack.length === 1 ? stack.pop()! : null;
}

console.log(evaluatePrefixExpression("+ 5 3"));
console.log(evaluatePrefixExpression("* + 2 3 4"));
