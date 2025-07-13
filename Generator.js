// =========================
// Generators in JavaScript
// =========================

// A generator is a special function that can pause and resume execution.
// It uses "function*" and "yield" to return values step by step.

// Why use Generators?
// - Generators are useful when you need to generate values one by one over time,
// instead of all at once. 
// - They allow lazy evaluation, which saves memory
// and improves performance—especially with large or infinite data.
// - They're also great for custom iteration logic and advanced async operations

// =========================
// Generator Function Example
// =========================

// Define a generator function
function* numberGenerator() {
  yield 10;
  yield 20;
  yield 30;
}

// Use next() to get values one by one
const gen = numberGenerator();

console.log(gen.next().value); // 10
console.log(gen.next().value); // 20
console.log(gen.next().value); // 30
// ------------------------

// You can also use for...of with generators
for (const num of numberGenerator()) {
  console.log(num); // 10, 20, 30
}
// ------------------------

// Generators return an iterator and support the Iterable Protocol by default.
// They allow lazy execution and are useful when handling large or dynamic sequences.
