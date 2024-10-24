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
  const plusRegex = /what is (\d+) plus (\d+)\?/;
  const plusMatch = query.match(plusRegex);
  if (plusMatch) {
    const num1 = parseInt(plusMatch[1], 10);
    const num2 = parseInt(plusMatch[2], 10);
    return (num1 + num2).toString();
  }

  // Dynamic handling for largest number comparison
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

  return "";

  

}


