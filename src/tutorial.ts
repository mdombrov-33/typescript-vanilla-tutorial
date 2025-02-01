// Type Annotations
let name: string = "John";
// name = 5; // Error: Type '5' is not assignable to type 'string'
name = name.toUpperCase(); // We get intellisense for the string methods
console.log(name);

// Type Inference
let age = 30; // TypeScript infers the type as number
// age = "30"; // Error: Type '"30"' is not assignable to type 'number'
console.log(age);

// Union types
let tax: number | string = 10;
tax = "10%";
// tax = true; // Error: Type 'true' is not assignable to type 'string | number'
console.log(tax);

// Literal types
let direction: "left" | "right" = "left";
// direction = "up"; // Error: Type '"up"' is not assignable to type '"left" | "right"'
direction = "left";
console.log(direction);

// Any type. Standard JS behaviour
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
console.log(randomValue);

// Practical example of type annotations
const books = ["The Alchemist", "The Power of Now", "The Art of War"];

let foundBook: string | undefined;

for (let book of books) {
  if ((book = "The Power of Now")) {
    foundBook = book;
    foundBook.length;
    break;
  }
}
foundBook?.toUpperCase(); // Optional chaining to avoid runtime error

// Types example
let discount: number | string = 10;
discount = "10%";
// discount = true; // Error: Type 'true' is not assignable to type 'string | number'

let orderStatus: "pending" | "completed" | "cancelled" = "pending";
// orderStatus = "shipped"; // Error: Type '"shipped"' is not assignable to type '"pending" | "completed" | "cancelled"'
orderStatus = "completed";
