import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom';

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: You should update the test below after you add your andrew id
    test('should return my andrew id', () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("rkensouh");
    });

    // TODO: You should update the test below after you add your name
    test('should return my name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("rkensouh-313"); // Replace with your actual name
    });

    // Test for arithmetic operation: "What is 37 plus 2?"
    test('should return the result of 37 plus 2', () => {
        const query = "What is 37 plus 2?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("39");
    });

    // Test for dynamic arithmetic operation
    test('should return the result of 10 plus 25', () => {
        const query = "What is 10 plus 25?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("35");
    });

    // Test for largest number comparison: "Which of the following numbers is the largest: 98, 48, 52?"
    test('should return the largest number from 98, 48, 52', () => {
        const query = "Which of the following numbers is the largest: 98, 48, 52?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("98");
    });

    // Test for another largest number comparison
    test('should return the largest number from 17, 76, 37', () => {
        const query = "Which of the following numbers is the largest: 17, 76, 37?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("76");
    });
     // Test for dynamic multiplication
     test('should return the result of 9 multiplied by 82', () => {
        const query = "What is 9 multiplied by 82?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("738");
    });

    test('should return the result of 18 multiplied by 82', () => {
        const query = "What is 18 multiplied by 82?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("1476");
    });

    test('should return the result of 95 multiplied by 58', () => {
        const query = "What is 95 multiplied by 58?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("5510");
    });

    // Test for finding numbers that are both square and cube
    test('should return 64 as both square and cube', () => {
        const query = "Which of the following numbers is both a square and a cube: 784, 512, 64, 2760, 4180, 1403, 4825?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("64");
    });

    // Test for finding prime numbers
    test('should return prime numbers from 59, 43, 97, 68, 80', () => {
        const query = "Which of the following numbers are primes: 59, 43, 97, 68, 80?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("59, 43, 97");
    });

    test('should return prime numbers from 75, 71, 6, 36, 21', () => {
        const query = "Which of the following numbers are primes: 75, 71, 6, 36, 21?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("71");
    });

    test('should return prime numbers from 30, 87, 73, 69, 82', () => {
        const query = "Which of the following numbers are primes: 30, 87, 73, 69, 82?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("73");
    });
});



