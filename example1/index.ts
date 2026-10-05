// Being confidently incorrect

// Mutable value that can be either a string or a number, but we know it starts as a string
let value: number|string = "banana";

// A function that mutates value from a string to a number is called
function foo() {
	value = 1;
}
foo();

// Here, typescript *knows* that `value` is still a string since it was never mutated, or was it?
value.length;

export {};
