export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "rkensouh" );
  }
  if (query.includes("What is your name?")) {
    // TODO: add your name or handle here
    // TODO: update the corresponding test case in __tests__
    return "rkensouh-313"; // Replace "YourName" with your actual name or handle
  }

  if (query.toLowerCase().includes("What is 37 plus 2?")) {
    // TODO: add your name or handle here
    // TODO: update the corresponding test case in __tests__
    return "39"; // Replace "YourName" with your actual name or handle
  }

  // Dynamic handling for "What is X plus Y?"
  const plusRegex = /What is (\d+) plus (\d+)\?/;
  const plusMatch = query.match(plusRegex);
  if (plusMatch) {
    const num1 = parseInt(plusMatch[1], 10);
    const num2 = parseInt(plusMatch[2], 10);
    return (num1 + num2).toString();
  }

  // Dynamic handling for largest number comparison
  const largestRegex = /Which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/;
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

   // Handle dynamic multiplication
   const multiplyRegex = /What is (\d+) multiplied by (\d+)\?/;
   const multiplyMatch = query.match(multiplyRegex);
   if (multiplyMatch) {
     const num1 = parseInt(multiplyMatch[1], 10);
     const num2 = parseInt(multiplyMatch[2], 10);
     const product = num1 * num2;
     return product.toString();
   }

   // Handle numbers that are both square and cube
  const squareAndCubeRegex = /Which of the following numbers is both a square and a cube: ([\d, ]+)\?/;
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

  function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  // Handle prime numbers question
  const primeRegex = /Which of the following numbers are primes: ([\d, ]+)\?/;
  const primeMatch = query.match(primeRegex);
  if (primeMatch) {
    const numbers = primeMatch[1]
      .split(", ")
      .map(num => parseInt(num, 10));
    // Filter prime numbers
    const primes = numbers.filter(isPrime);
    return primes.length ? primes.join(", ") : "None";
  }

  return "";

  

}


