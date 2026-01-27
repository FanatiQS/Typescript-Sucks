// @ts-check

let value: number|string = "banana";
function foo() {
	value = 1;
}
foo();

// Here, typescript *knows* that `value` is a string, it can not be anything else
console.log(value);
