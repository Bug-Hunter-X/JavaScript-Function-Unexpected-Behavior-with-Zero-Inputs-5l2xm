# JavaScript Function Unexpected Behavior with Zero Inputs

This repository demonstrates a subtle bug in a JavaScript function where unexpected behavior occurs when both inputs are zero. The function `foo` is intended to add two numbers but returns 0 when both inputs are 0 which might not be the desired behavior.

## Bug Description
The `foo` function returns 0 when both inputs (`a` and `b`) are 0. While mathematically correct, it may lead to unforeseen consequences if this behavior is not explicitly addressed or considered in the context of the broader application.

## Solution
The solution involves explicitly checking for the condition where both inputs are zero and returning a value that is appropriate or more intuitive within the application context. This could involve either throwing an error or returning a different value like `NaN` (Not a Number). 

## How to Reproduce
1. Clone the repository.
2. Open `bug.js` to see the erroneous code. 
3. Open `bugSolution.js` to see the correct code. 
4. Run both files and compare the outputs for the input (0, 0) and (1,2).