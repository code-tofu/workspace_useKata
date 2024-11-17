// Remove First and Last Character 
// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

export function removeChar(str: string): string {
    return str.substring(1, str.length - 1)
}

//TESTS
import { removeChar } from './solution';
import { assert } from 'chai';

describe('removeChar', () => {
  it('basic tests', () => {
    assert.equal(removeChar('eloquent'), 'loquen');
    assert.equal(removeChar('country'), 'ountr');
    assert.equal(removeChar('person'), 'erso');
    assert.equal(removeChar('place'), 'lac');
  });
});

//SENSEI
export function removeChar_V1(str: string): string {
    return str.slice(1, -1);
}