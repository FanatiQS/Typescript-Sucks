type foo = {
	a: number;
	b: number;
};

type bar = {
	a: null;
	b: string;
};

function baz(arg: foo | bar): foo | bar {
	arg.a = 1;
	arg.b = "str";
	return arg;
}

const x: bar = { a: null, b: "" };
const y = baz({ a: null, b: "" });
if (y.a == null) {
	console.log(y.b.charCodeAt(0));
}

export {};
