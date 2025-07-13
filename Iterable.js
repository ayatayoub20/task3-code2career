// =========================
// Iterable Protocol in JavaScript
// =========================

// What does Iterable mean?
// - The word "Iterable" means we can iterate over it item by item.
// - Iterable Protocol in JS lets us loop over items using for...of, spread (...), Array.from, etc.

// For an object to be iterable,
// it must have a method [Symbol.iterator]()
// which returns an iterator object with a next() function.

// =========================
// Built-in Iterables
// =========================

// ✅ Built-in iterables in JS:
// - Arrays
// - Strings
// - Map
// - Set
// - Generators

// ❌ Plain objects {} are NOT iterable by default.
// You need to add [Symbol.iterator] manually to make them iterable.

// =========================
// Iterable Protocol Examples
// =========================

// 1- Looping over an array (arrays are iterable)
const arr = [10, 20, 30];
for (const num of arr) {
  console.log(num); // 10, 20, 30
}
// ------------------------

// 2- Looping over a string (strings are iterable)
const str = "Hi";
for (const char of str) {
  console.log(char); // H, i
}
// ------------------------

// 3- Using spread syntax with a string
console.log([..."abc"]); // ["a", "b", "c"]
// ------------------------

// =========================
// Example: Making a custom object iterable
// =========================

const myIterableObject = {
  data: [10, 20, 30],

  [Symbol.iterator]() {
    let index = 0;
    const values = this.data;

    return {
      next() {
        if (index < values.length) {
          return { value: values[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// Using for...of to iterate over the custom iterable object
for (const value of myIterableObject) {
  console.log(value); // 10, 20, 30
}

