type t1 = {
	value: string;
};

type t2 = {
	value: string | number;
};

// Types overlap, but typescript doesn't see that
function foo1(arg: t2): t1 | undefined {
	if (typeof arg.value === "string") {
		console.log(arg.value.charCodeAt(0));
		// @ts-expect-error
		return arg;
	}
}

// Automatic cloning doesn't help
function foo2(arg: t2): t1 | undefined {
	if (typeof arg.value === "string") {
		console.log(arg.value.charCodeAt(0));
		// @ts-expect-error
		return { ...arg };
	}
}

// Manual cloning works
function foo3(arg: t2): t1 | undefined {
	if (typeof arg.value === "string") {
		console.log(arg.value.charCodeAt(0));
		return { value: arg.value };
	}
}

// Not type safe, relies on developer ensuring type correctness
function foo4(arg: t2): t1 | undefined {
	if (typeof arg.value !== "string") {
		return arg as t1;
	}
}

// This works but relies on manually recreating the type dynamically
function foo5(arg: t2): t1 | undefined {
	if (typeof arg.value === "string") {
		return (arg as { value: typeof arg.value });
	}
}
