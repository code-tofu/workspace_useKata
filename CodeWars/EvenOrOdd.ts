// Even or Odd
// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

export function removeChar(str: string): string {
    return str.substring(1, str.length - 1)
}

//SENSEI
export function removeChar_V1(str: string): string {
    return str.slice(1, -1);
}