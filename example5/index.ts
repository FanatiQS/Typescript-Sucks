// Incorrect types from array indexing

// Array consists of 5 entries
const arr: number[] = [ 1, 2, 3, 4, 5 ];

// We can safely access any index and know it has to be a number, right?
const value1 = arr[100];
console.log(value1.toFixed());

// When using the .at method for indexing, it knows the result can be `undefined`
const value2 = arr.at(0);
console.log(value2 && value2.toFixed());

export {};
