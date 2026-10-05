// Just incorrect type behavior

// A function that takes an array of strings and/or numbers to mutate
function foo(arr: (number|string)[]) {
	arr.push("string");
}

// We can safely pass an array of numbers to `foo`, it will strictly remain an array of numbers, right?
const numbers: number[] = [ 1 ];
foo(numbers);
for (const num of numbers) {
	console.log(num.toFixed());
}

export {};
