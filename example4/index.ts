// Importing a javascript module from node_modules in a typescript file completely ignores any defined types, but works fine from in a javascript file, so here using a plain javascript file is a better developer experience than using typescript

// We can not import the javascript module, even though tsc picked up everything correctly for the javascript file
// It is only an error when `strict` parameter is used
// @ts-expect-error
import { stringToNumber } from "string-to-number";

// Since typescript does not pick up the jsdoc typings, both argument and return type are now `any`
const num = stringToNumber("1");
console.log(num);

// Using the incorrect type will not give a type error, though it did work in javascript
stringToNumber(1);
