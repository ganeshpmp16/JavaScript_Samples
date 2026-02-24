// this example shows how to import named exports from another module

// import named exports from the NamedExport module
import { name, age, greet } from './NamedExport.js';
// use the imported variables and function
console.log('Name:', name);
console.log('Age:', age);
greet();