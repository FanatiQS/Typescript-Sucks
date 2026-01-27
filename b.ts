function foo(arr: string[]) {
	arr.forEach((value) => {
		console.log(value.toUpperCase());
	});
}

// In typescript, you can not pass `number[]`, `number[]|string[]` to `foo` but passing `any` is completely fine
let x: any = [ 1 ];
foo(x);

// Type `any` is default, so it is accepted everywhere
let y;
y = [ 1 ];
foo(y);
