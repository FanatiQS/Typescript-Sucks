// Relaxed type to strong type

// A function that very explicity takes an array of strings
function foo(arr: string[]) {
	for (const value of arr) {
		console.log(value.toUpperCase());
	}
}

// You can not pass `number[]` or `number[]|string[]` to `foo` since that would not satisfy its argument requirement, but passing `any` is completely fine and wouldn't break anything, right?
let x: any = [ 1 ];
foo(x);

export {};
