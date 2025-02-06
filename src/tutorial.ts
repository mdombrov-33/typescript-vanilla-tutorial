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

//Arrays and objects
// let prices: number[] = [10, 20, "hello"]; // Error: Type 'string' is not assignable to type 'number'
let names: string[] = ["John", "Doe", "Jane"];
let array: (string | number)[] = ["John", 10, "Doe", 20];

let car: {
  brand: string;
  year: number;
} = {
  brand: "Toyota",
  year: 2020,
};

// Example
let book = {
  title: "book",
  cost: 10,
};

let pen = {
  title: "pen",
  cost: 5,
};

let notebook = {
  title: "notebook",
};

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = "new book"; // Error: Cannot assign to 'title' because it is a read-only property

let bike: { brand: string; year: number } = {
  brand: "Yamaha",
  year: 2020,
};

// bike.year = "old"; // Error: Type '"old"' is not assignable to type 'number'

// Functions
function sayHello(name: string) {
  console.log(`Hello ${name}`);
}

// - any or
// - config or
// - type

// sayHello(5); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
sayHello("John");

function calculateDiscount(price: number): number {
  return price * 0.9;
}

const finalPrice = calculateDiscount(100);
