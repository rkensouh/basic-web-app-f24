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

  return "";

  

}


