// @ts-check

// Importing a javascript module from node_modules in a typescript file completely ignores any defined types, but works fine from in a javascript file

// We can import the module fine, though tsc will complain about not knowing the types, it still does pick it up correctly
import { stringToNumber } from "string-to-number";

// Since tsc does pick up the jsdoc typings, it knows both the explicitly defined argument type and the implicit return type
const num = stringToNumber("1");
console.log(num);

// Using the incorrect type will give a type error just like when using typescript
// @ts-expect-error
stringToNumber(1);
