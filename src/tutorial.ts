// Type Annotations
let name: string = "John";
// name = 5; // Error: Type '5' is not assignable to type 'string'
name = name.toUpperCase(); // We get intellisense for the string methods
console.log(name);

// Type Inference
let age = 30; // TypeScript infers the type as number
// age = "30"; // Error: Type '"30"' is not assignable to type 'number'
console.log(age);
