// Remove First and Last Character
// Create a function that takes an integer as an argument and returns `"Even"` for even numbers or `"Odd"` for odd numbers.
export function even_or_odd(n: number): string {
    if (n % 2) {
        return 'Odd';
    } else {
        return 'Even';
    }
}

//SENSEI
export function even_or_odd_A1(n: number): String {
    return n % 2 == 0 ? "Even" : "Odd";
}
