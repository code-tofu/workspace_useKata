// Even or Odd
// Create a function that takes an integer as an argument and returns `"Even"` for even numbers or `"Odd"` for odd numbers.
export function even_or_odd(n: number): string {
    if (n % 2) {
        return 'Odd';
    } else {
        return 'Even';
    }
}

//TEST
import { evenOrOdd } from "./solution";
import { assert    } from "chai";

describe("Example tests", function() {
  it("evenOrOdd(1) should return 'Odd'", function(){
    assert.equal(evenOrOdd(1), "Odd");
  });
  it("evenOrOdd(2) should return 'Even'", function(){
    assert.equal(evenOrOdd(2), "Even");
  });
  it("evenOrOdd(-1) should return 'Odd'", function(){
    assert.equal(evenOrOdd(-1), "Odd");
  });
  it("evenOrOdd(-2) should return 'Even'", function(){
    assert.equal(evenOrOdd(-2), "Even");
  });
  it("evenOrOdd(0) should return 'Even'", function(){
    assert.equal(evenOrOdd(0), "Even");
  });
});

//SENSEI
export function even_or_odd_A1(n: number): String {
    return n % 2 == 0 ? "Even" : "Odd";
}
