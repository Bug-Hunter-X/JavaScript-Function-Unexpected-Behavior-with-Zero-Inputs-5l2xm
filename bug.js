function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // This line is problematic!
  }
  return a + b;
}

console.log(foo(0, 0)); // Outputs 0, but might be unexpected if not handled
console.log(foo(1, 2)); // Outputs 3