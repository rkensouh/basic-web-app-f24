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
});


