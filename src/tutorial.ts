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

// Optional parameters, default parameters and rest parameters
function calculatePrice(price: number, discount?: number): number {
  // ? if we want to make it optional
  return price - (discount || 0); // || 0 if we want to add default value because discount may be undefined
}

let priceAfterDiscount = calculatePrice(100, 10);
////////
function calculateScore(initialScore: number, penalty: number = 0): number {
  return initialScore - penalty;
}

let scoreAfterPenalty = calculateScore(100, 10);
let scoreWithoutPenalty = calculateScore(300);
/////////////

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((acc, num) => acc + num, 0);

  return `${message}${total}`;
}

let result = sum("The total is : ", 1, 2, 3, 4, 5);
/////////
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, Typescript");

function processInput(input: string | number) {
  if (typeof input === "number") {
    return input * 2;
    console.log(input);
  } else {
    return input.toUpperCase();
    console.log(input);
  }
}

let result1 = processInput(10);
let result2 = processInput("hello");
console.log(result1);
console.log(result2);

// Objects as parameters and excess property checks
// function createEmployee({ id }: { id: number }): {
//   id: number;
//   isActive: boolean;
// } {
//   return {
//     id,
//     isActive: id % 2 === 0,
//   };
// }

// const firstEmployee = createEmployee({ id: 1 });
// const secondEmployee = createEmployee({ id: 2 });
// console.log(firstEmployee);
// console.log(secondEmployee);

// alternative
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome, ${student.name.toUpperCase()}`);
}

const student = {
  id: 1,
  name: "John",
};

createStudent(student);

// Excess property checks
createStudent({ id: 1, name: "Aboba", age: 20 }); // Error: Object literal may only specify known properties, and 'age' does not exist in type '{ id: number; name: string; }'
///////////////////////
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * 2;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData("Hello"));
console.log(processData("Hello", { reverse: true }));

// Type alias and intersection types

type User = { id: number; name: string; isActive: boolean };

const bob: User = {
  id: 1,
  name: "john",
  isActive: true,
};
const abob: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

type StringOrNumber = string | number; // Type alias for string | number

let value: StringOrNumber;
value = "hello"; // This is valid
value = 123; // This is also valid

type Theme = "light" | "dark"; // Type alias for theme

let theme: Theme;
theme = "light"; // This is valid
theme = "dark"; // This is also valid

// Function that accepts the Theme type alias
function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark"); // This will set the theme to 'dark'
/////////////////////
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `Manager: ${staff.name} of ${staff.employees.length} employees`
    );
  } else {
    console.log(`${staff.name} works in ${staff.department} department`);
  }
}

const alice: Employee = { id: 1, name: "Alice", department: "Engineering" };
const steve: Employee = { id: 2, name: "Steve", department: "Marketing" };

const jack: Manager = { id: 3, name: "Jack", employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(jack);

//Intersection types
type Book = { id: number; title: string; price: number };
// type DiscountedBook = Book & { discount: number };

const book1: Book = { id: 1, title: "The Alchemist", price: 10 };
const book2: Book = { id: 2, title: "The Power of Now", price: 15 };

const discountedBook: Book & { discount: number } = {
  id: 3,
  title: "The Art of War",
  price: 20,
  discount: 0.1,
};

// Interfaces - define the shape of an object or a function
interface Book1 {
  readonly id: number;
  title: string;
  author: string;
  genre?: string;
  //method
  printAuthor(): void;
}

const deepWork: Book1 = {
  id: 1,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author);
  },
};

deepWork.printAuthor();

// Example of interfaces
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number;
}

const laptop: Computer = {
  id: 1,
  brand: "random",
  ram: 8,
  upgradeRam(amount) {
    this.ram += amount;
    return this.ram;
  },
};

laptop.storage = 256;
console.log(laptop);
laptop.upgradeRam(8);
console.log(laptop);
