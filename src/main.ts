import "./style.css";

function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

let isDone: boolean = false;
console.log("isDone: ", isDone);

let decimal: number = 6; // десяткові
console.log("decimal: ", decimal);
let float: number = 3.14; // речові або число з плаваючою крапкою
console.log("float: ", float);
let hex: number = 0xf00d; // шістнадцяткове
console.log("hex: ", hex);
let binary: number = 0b1010; // двійкове
console.log("binary: ", binary);
let octal: number = 0o744; // вісімкове
console.log("octal: ", octal);

let color: string = "blue";
console.log("color: ", color);

let empty: null = null;
console.log("empty: ", empty);
let notParam: undefined = undefined;
console.log("notParam: ", notParam);

const num = 10;
console.log("num: ", num);
const str = "Some string";
console.log("str: ", str);
const bool = true;
console.log("bool: ", bool);
// const empty = null;
console.log("empty: ", empty);
// const notParam = undefined;
console.log("notParam: ", notParam);

// function foo(num: number, str: string, bool: boolean, empty: null) {
//   // Some logic
// }

// function foo(num = 10, str = "Some string", bool = true, empty = null) {
//   // Some logic
// }

Object;
// const obj: object = {};
// console.log("obj: ", obj);

const obj: {} = {};
console.log("obj: ", obj);

// let user = {
//   name: "Tom",
//   age: 30,
// };
// console.log("user: ", user);

// let user: { name: string; age: number } = {
//   name: "Tom",
//   age: 30,
// };
// console.log("user: ", user);

// type User = {
//   name: string;
//   age: number;
// };

// let user: User = {
//   name: "Tom",
//   age: 30,
// };
// console.log("user: ", user);

// let userJack: User = {
//   name: "Jack",
//   age: 25,
// };
// console.log("userJack: ", userJack);

// interface User {
//   name: string;
//   age: number;
// }

// let user: User = {
//   name: "Tom",
//   age: 30,
// };
// console.log("user: ", user);

Array;

// let arrString: string[];
// console.log("arrString: ", arrString);

// let arrNumber: number[];
// console.log("arrNumber: ", arrNumber);

let matrix: number[][] = [
  [1, 2],
  [3, 4],
];
console.log("matrix: ", matrix);

let mixed: (number | string)[] = [1, "two"];
console.log("mixed: ", mixed);

let numbers: Array<number> = [1, 2, 3, 4, 5];
console.log("numbers: ", numbers);

// let users: {
//   name: string;
//   age: number;
// }[] = [
//   { name: "Tom", age: 30 },
//   { name: "Jack", age: 25 },
//   { name: "Alice", age: 32 },
// ];
// console.log("users: ", users);

type User = {
  name: string;
  age: number;
};

let users: User[] = [
  { name: "Tom", age: 30 },
  { name: "Jack", age: 25 },
  { name: "Alice", age: 32 },
];
console.log("users: ", users);

let arrAny: any[];
arrAny = [123, "TEXT", { name: "Tom" }, [1, 2, 3]];
console.log("arrAny: ", arrAny);
