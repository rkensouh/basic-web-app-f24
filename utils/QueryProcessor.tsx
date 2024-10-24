export default function QueryProcessor(query: string): string {
  query = query.toLowerCase(); // make the query case-insensitive

  if (query.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.includes("andrew id")) {
    return "rkensouh";
  }

  if (query.includes("what is your name?")) {
    return "rkensouh-313";
  }

  // Handle dynamic arithmetic (addition)
  const plusRegex = /what is (\d+(?: plus \d+)*)\?/;
  const plusMatch = query.match(plusRegex);
  if (plusMatch) {
    const numbers = plusMatch[1]
      .split(" plus ")
      .map(num => parseInt(num, 10));
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum.toString();
  }

  // Handle dynamic multiplication
  const multiplyRegex = /what is (\d+) multiplied by (\d+)\?/;
  const multiplyMatch = query.match(multiplyRegex);
  if (multiplyMatch) {
    const num1 = parseInt(multiplyMatch[1], 10);
    const num2 = parseInt(multiplyMatch[2], 10);
    const product = num1 * num2;
    return product.toString();
  }

  // Handle largest number comparison
  const largestRegex = /which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/;
  const largestMatch = query.match(largestRegex);
  if (largestMatch) {
    const numbers = [
      parseInt(largestMatch[1], 10),
      parseInt(largestMatch[2], 10),
      parseInt(largestMatch[3], 10),
    ];
    const largest = Math.max(...numbers);
    return largest.toString();
  }

  // Handle numbers that are both square and cube
  const squareAndCubeRegex = /which of the following numbers is both a square and a cube: ([\d, ]+)\?/;
  const squareAndCubeMatch = query.match(squareAndCubeRegex);
  if (squareAndCubeMatch) {
    const numbers = squareAndCubeMatch[1]
      .split(", ")
      .map(num => parseInt(num, 10));
    // Find numbers that are both squares and cubes
    const result = numbers.find(num => {
      const sqrt = Math.sqrt(num);
      const cbrt = Math.cbrt(num);
      return Number.isInteger(sqrt) && Number.isInteger(cbrt);
    });
    return result ? result.toString() : "None";
  }

  return "";
}
