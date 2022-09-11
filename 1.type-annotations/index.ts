let apples: number;

// apples = 'Northerners'; // ts-throws - Type 'string' is not assignable to type 'number'

let speed: string = 'fast';

// speed = 1.9; // ts-throws: Type 'number' is not assignable to type 'string'.

let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// (): string -  A function whose declared type is neither 'void' nor 'any' must return a value.
function welcome(name: string) {
  const msg = `Welcome Mr/Mr.s ${name}`;
  console.log(msg);
}

welcome('SALMAN'); // ts-throws:  An argument for 'name' was not provided.

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x":10, "y": 20}';
const cordinates: { x: number; y: number } = JSON.parse(json);
console.log(cordinates); // {"x":10, "y": 20}
