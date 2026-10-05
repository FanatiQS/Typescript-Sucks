class Foo1 {
	value: number | null;

	// Value start off as null
	constructor() {
		this.value = null;
	}

	async bar() {		
		// We know the value is a number since we just set it
		this.value = 42;
		console.log(typeof this.value); // typescript: "number", reality: "number"

		// Typescript still thinks it knows the value is a number even though we can overwrite it from the caller
		await new Promise((resolve) => setTimeout(resolve));
		console.log(typeof this.value); // typescript: "number", reality: "number" | "null"
	}
}



class Foo2 {
	private value: number | null;

	// Value start off as null
	constructor() {
		this.value = null;
	}

	async bar() {		
		// We know the value is a number since we just set it
		this.value = 42;
		console.log(typeof this.value); // typescript: "number", reality: "number"

		// Typescript falls back to the value being either a number or null even though there is no way to overwrite this private value
		setTimeout(() => {
			console.log(typeof this.value); // typescript: "number" | "null", reality: "number"
		});
	}
}



const a = new Foo1();
a.value = null;

const b = new Foo2();
