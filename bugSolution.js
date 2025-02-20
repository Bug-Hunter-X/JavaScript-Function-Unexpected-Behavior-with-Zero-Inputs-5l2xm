function foo(a, b) {
  if (a === 0 && b === 0) {
    // Handle the case where both inputs are 0.  Return NaN or throw an error, depending on your needs.
    return NaN; // Or throw new Error("Both inputs cannot be zero");
  }
  return a + b;
}

console.log(foo(0, 0)); // Outputs NaN (or throws an error)
console.log(foo(1, 2)); // Outputs 3