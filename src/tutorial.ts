(// Type Annotations
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

// Interface advanced
interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "John",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

interface Employee1 extends Person {
  employeeId: number;
}

const employee: Employee1 = {
  name: "Jane",
  age: 25,
  employeeId: 1,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

console.log(person.getDetails());

interface Manager22 extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager22 = {
  name: "Bob",
  age: 40,
  dogName: "Buddy",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog name: ${this.dogName}`;
  },
  managePeople() {
    console.log("Managing people");
  },
};

console.log(manager.getDetails());
console.log(manager.getDogDetails());
manager.managePeople();

// Task for extending interfaces
interface Person66 {
  name: string;
}

interface DogOwner66 extends Person66 {
  dogName: string;
}

interface Manager66 extends Person66 {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee66(): Person66 | DogOwner66 | Manager66 {
  const random = Math.random();
  if (random < 0.33) {
    return { name: "John" };
  } else if (random < 0.66) {
    return { name: "Bob", dogName: "Alice" };
  } else {
    return {
      name: "Jack",
      managePeople() {
        console.log("Managing people");
      },
      delegateTasks() {
        console.log("Delegating tasks");
      },
    };
  }
}

const employee66: Person66 | DogOwner66 | Manager66 = getEmployee66();
console.log(employee66);

function isManager(obj: Person66 | DogOwner66 | Manager66): obj is Manager66 {
  return "managePeople" in obj;
}

if (isManager(employee66)) {
  employee66.delegateTasks();
}

// Tuple
let person77: [string, number] = ["John", 30];

let date77: readonly [number, number, number] = [2021, 10, 10];
date77.push(34);

function getPerson(): [string, number] {
  return ["John", 30];
}

const randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

let susan: [string, number?] = ["Susan"];

//Enums
enum ServerResponseStatus {
  Success = 200,
  Error = "Error",
}

Object.values(ServerResponseStatus).values;

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["Data1", "Data2"],
  };
}

const response = getServerResponse();
console.log(response);

// Enum example

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User66 = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser66(user: User66): User66 {
  return user;
}

const user888: User = createUser66({
  id: 1,
  name: "John",
  role: UserRole.Admin,
  contact: ["aboba.gmail.com", "123456"],
});

// Type assertion, type unknown and type never
// 1. Type Assertion (as or < >)
// Type assertion tells TypeScript to treat a value as a specific type without changing the actual value.
// It's useful when you know more about the type than TypeScript does.

// (value as Type)    // Preferred syntax
// (<Type>value)      // Alternative (Not recommended in JSX)
// Example:
let input: unknown = "Hello, Maksym!";
let strLength: number = (input as string).length;

console.log(strLength); // Output: 14
// input is unknown, but we assert it as a string to access .length.
// Example: Type Assertion with DOM Elements
const inputElement = document.getElementById("myInput") as HTMLInputElement;
inputElement.value = "Hello!";
//

let num = "123" as number; // ❌ Error: Type 'string' cannot be converted to 'number'
// 2. unknownTypeScript doesn’t know getElementById() returns an HTMLInputElement, so we assert it.
// ⚠️ Type Assertion vs Type Casting
// Type assertion does not change the actual data type at runtime.
// Wrong assertions can lead to errors: Type
// unknown is a type-safe alternative to any.
// It means: "I don’t know what this is, but TypeScript should enforce checks before using it."

// Example: unknown vs any
let value: unknown;

// value = "Hello";  // ✅ Allowed
// value = 42;       // ✅ Allowed
// value = true;     // ✅ Allowed

let str: string;
// str = value;  // ❌ Error: Type 'unknown' is not assignable to type 'string'
// Unlike any, you must check the type before using unknown.
// Checking Type Before Using unknown
// typescript

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe to use string methods
}
// When to Use unknown?
// ✅ When you receive dynamic data (e.g., API responses).
// ✅ When dealing with user inputs.
// ✅ When you need strict type-checking.

// 3. never Type
// The never type represents values that never happen.
// A function returning never never completes (throws an error or runs forever).

// Example 1: Function That Always Throws
// typescript

function throwError(message: string): never {
  throw new Error(message);
}
// This function never returns because it always throws an error.
// Example 2: Function That Never Ends (Infinite Loop)
// typescript

function infiniteLoop(): never {
  while (true) {
    console.log("Running forever...");
  }
}
// This function runs forever and never returns a value.
// Example 3: Exhaustive Type Checking
// The never type is useful for exhaustive type checking in switch statements.

// typescript

type Status = "success" | "error" | "loading";

function handleStatus(status: Status) {
  switch (status) {
    case "success":
      console.log("Success!");
      break;
    case "error":
      console.log("Error!");
      break;
    case "loading":
      console.log("Loading...");
      break;
    default:
      const check: never = status; // ❌ If a new case is added, TypeScript warns us!
  }
}
// If we add a new status (e.g., "pending"), TypeScript will throw an error to remind us to update the switch.
// Summary
// Concept	Description	Example
// Type Assertion	Manually tells TypeScript what type a value should be	let value = input as string;
// unknown	Type-safe any that requires checks before use	let data: unknown; if (typeof data === "string") {}
// never	Represents values that never occur (errors, infinite loops)	function fail(): never { throw new Error("Oops!"); }

// ES6 modules
// By default everything is put in the global scope. To avoid that we can use modules.
// To fix that we can:
//1. Go to tsconfig.json and set "moduleDetection": "force"
//2. Use export and import keywords
//3. Use type="module" in the script tag in the HTML file
//4. Use a server to run the code

// Type guards
// Type guards are a way to check the type of a variable at runtime.
// They help TypeScript understand the type of a variable in a conditional block.

// Typeof Type Guards
type ValueType = string | number | boolean;

let value66: ValueType;
const random = Math.random();
value66 = random < 0.33 ? "Hello" : random < 0.66 ? 42 : true;

function checkValue66(value: ValueType): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
  if (typeof value === "boolean") {
    console.log(value ? "Yes" : "No");
  }
}

//Equality Narrowing Type Guards
type Dog66 = { type: "dog"; name: string; bark: () => void };
type Cat66 = { type: "cat"; name: string; meow: () => void };
type Pet66 = Dog66 | Cat66;

//1
// function makeSound(pet: Pet66): void {
//   if (pet.type === "dog") {
//     pet.bark();
//   }
//   if (pet.type === "cat") {
//     pet.meow();
//   }
// }

//2
function makeSound(pet: Pet66): void {
  if ("bark" in pet) {
    pet.bark();
  } else {
    pet.meow();
  }
}

// Truthy/Falsy Type Guards
function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log("No value");
  }
}

printLength("Hello"); // Output: 5
printLength(null); // Output: No value
printLength(undefined); // Output: No value

// Instanceof Type Guards
// try {
//   throw new Error("Oops!");
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   }
// }

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.toISOString();
  }
  return input.toUpperCase();
}

// Type predicate functions
// Type predicate is a function that returns a special type that can be used to narrow down types withing conditional blocks.
// It's a way to define a custom type guard.
type Student88 = {
  name: string;
  study: () => void;
};

type User88 = {
  name: string;
  login: () => void;
};

type Person88 = Student88 | User88;

const randomPerson88 = (): Person88 => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "mary", login: () => console.log("Logging in") };
};

const person99 = randomPerson88();

function isStudent88(person: Person88): person is Student88 {
  // return "study" in person;
  return (person as Student88).study !== undefined;
}

if (isStudent88(person99)) {
  person99.study();
} else {
  person99.login();
}

// Discriminated Unions
// Discriminated unions are a way to combine types that have a common property.

type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;
    default:
      return state;
  }
}

const newState = reducer(15, {
  type: "increment",
  user: "John",
  amount: 10,
  timestamp: Date.now(),
});

//Generics
// Generics are a way to create reusable components that can work with different types.
// They allow us to define the type of a function or a class at runtime.

// let array1: string[] = ["Apple", "Banana", "Orange"];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, false];

let array1: Array<string> = ["Apple", "Banana", "Orange"];
////////////
// function createString(arg: string): string {
//   return arg;
// }

// function createNumber(arg: number): number {
//   return arg;
// }
////////////////
function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>("Hello");
const someNumberValue = genericFunction<number>(42);
const someBooleanValue = genericFunction<boolean>(true);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "Hello",
  getValue() {
    return this.value;
  },
};

async function someFunction(): Promise<string> {
  return "Hello";
}

const result100 = someFunction();
///////////

// function generateStringArray(length: number, value: string) : string[] {
//   let result: string[] = [];
//   result = Array(length).fill(value);
//   return result;
// }

function createArray<T>(length: number, value: T): Array<T> {
 let result: T[] = [];
 result = Array(length).fill(value);
  return result;
}

let arrayOfStrings = createArray<string>(3, "Hello");
let arrayOfNumbers = createArray<number>(5, 42);
let arrayOfBooleans = createArray<boolean>(2, true);
//////////////

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

const pair1 = pair<string, number>("Hello", 42);
const pair2 = pair<number, boolean>(42, true);
const pair3 = pair<boolean, string>(true, "Hello");
/////////

function processValue<T extends string>(value: T): T{
  return value;
}

const processedValue = processValue("Hello");


// Fetch data from API
const url = "https://jsonplaceholder.typicode.com/posts";

type Tour = {
  id: string,
  name: string,
  info: string,
  image: string,
  price: string,
  
}



async function fetchData(url:string): Promise<Tour[]>{
  try{
const response = await fetch(url);
if(!response.ok){
  throw new Error(`HTTP error! status: ${response.status} `)
}
const data = await response.json();
return data;
  }catch(error)
  {
    const errMsg = error instanceof Error ? error.message : "An error occurred";
    console.error(errMsg);
    return [];
  }
}

const tours = await fetchData(url);
tours.map(() => {

})