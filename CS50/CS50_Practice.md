Multiple base cases: The Fibonacci number sequence is defined as follows:
 - The first element is 0.
 - The second element is 1.
 - The nth element is the sum of the (n-1)th and (n-2)th elements.
 
 
Multiple recursive cases: The Collatz conjecture.
 - The Collatz conjecture is applies to positive integers and speculates that it is always possible to get "back to 1" if you follow these steps:
 - If n is 1, stop.
 -  Otherwise, if n is even, repeat this process on n/2. Otherwise, if n is odd, repeat this process on 3n + 1.
 - Write a recursive function collatz(n) that calculates howmany steps it takes to get to 1 if you start from n and recurse as indicated above.

| n | collatz(n) |Steps |
|---|---|---|	
| 1		| 0		| 1 |			
| 2		| 1		| 2 -> 1 |												
| 3		| 7		| 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1	|
| 4		| 2 	| 4 -> 2 -> 1 |		
| 5		| 5		| 5 -> 16 -> 8 -> 4 -> 2 -> 1 |
| 6		| 8		| 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1 |
| 7		| 16	| 7 -> 22 -> 11 -> 34 -> 17 -> 52 -> 26 -> 13 -> 40 -> 20 -> 1O -> 5 -> 16 -> 8 -> 4 -> 2 -> 1 |
| 8		| 3		| 8 -> 4 -> 2 -> 1 |						
| 15	| 17	| 15 -> 46 -> 23 -> 70  -> ... -> 8 -> 4 -> 2 -> 1 |		
| 27	| 111	| 27 -> 82 -> 41 -> 124 -> ... -> 8 -> 4 -> 2 -> 1 |
| 50	| 24	| 50 -> 25 -> 76 -> 38 -> ... -> 8 -> 4 -> 2 -> 1 |
