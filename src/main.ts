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

// Object;

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

// Array;

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

////////////////////////

// Any;

// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false;
// notSure = {};

// let num: number;

// num = notSure;

// let data: any = fetchData();

// function fetchUserData(id: string, callback: (data: any) => void): void {
//   // Тут може бути якийсь запит, але ми його заповнимо самі
//   const responseData = { name: "Tom" };

//   callback(responseData);
// }

// // Використання функції:
// fetchUserData("123", (data) => {
//   console.log(data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
// });

// Unknown;

// let notSure: unknown = 4;
// notSure = "maybe a string instead";
// notSure = false;

// let num: number;

// num = notSure;

function fetchUserData() {
  return "Tom";
}

let userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
if (typeof userData === "string") {
  console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
}

// Tuple;

// let tupleType: [string, boolean];
// tupleType = ['hello', true]; // OK
// tupleType = [true, 'hello']; // Error. Неправильні типи
// tupleType = ['hello', true, true]; // Error. Більше значень ніж у tuple

let date: [number, number, number];
date = [7, 11, 2023]; // OK
console.log("date: ", date);

let fixed: [string, number];

fixed = ["Text", 10];

fixed.push("Add this text");
console.log("fixed: ", fixed);

let tuple: [string, ...number[]];

tuple = ["hello", 42, 100, 200]; // OK
console.log("tuple: ", tuple);

// Enum;

// enum Role {
//   ADMIN,
//   USER,
// }
// console.log("Role: ", Role);

// enum Role {
//   ADMIN,
//   USER,
// }

// const person = {
//   role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
//   console.log("Role: ", Role.ADMIN);
// }

enum Role {
  ADMIN,
  USER,
}

console.log(Role.ADMIN); // 0
console.log(Role[Role.ADMIN]); // "ADMIN"

// enum UserStatus {
//   Active = "ACTIVE",
//   Inactive = "INACTIVE",
//   Banned = "BANNED",
// }
// let status: UserStatus = UserStatus.Active;
// console.log("status: ", status);

// enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// function respond(status: HttpCodes) {
//   console.log("status: ", status);
//   // handle response
// }

// respond(HttpCodes.OK);

const enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

const status = HttpCodes.OK;
console.log("status: ", status);

// const enum Test {
//   A = 1,
//   B = 2,
// }

// for (let item in Test) {
//   console.log(item);
// }

// Union Type;

// let mixedType: string | number | boolean;

// mixedType = "string"; // OK
// mixedType = 10; // OK
// mixedType = true; // OK
// mixedType = {}; // Error: Type '{}' is not assignable to type 'string | number | boolean'.

// type Dog = {
//   legs: 4;
//   bark: () => void;
// };

// type Fish = {
//   fins: 2;
//   swim: () => void;
// };

// let pet: Dog | Fish;

// // type guard function
// function isDog(pet: Dog | Fish): pet is Dog {
//   return "bark" in pet;
// }

// // Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
// if (isDog(pet)) {
//   pet.bark(); // OK, тепер TypeScript знає, що pet - це Dog
// } else {
//   pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
// }

// Intersection Type;

type Employee = {
  name: string;
  id: number;
};

type Manager = {
  employees: Employee[];
};

type CEO = Employee & Manager;

const ceo: CEO = {
  name: "Alice",
  id: 1,
  employees: [
    {
      name: "Bob",
      id: 2,
    },
  ],
};
console.log("ceo: ", ceo);

// Literal Type;

// type OneOrTwo = 1 | 2;
// let value: OneOrTwo;
// value = 1; // OK
// value = 2; // OK
// value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.

// type YesOrNo = 'yes' | 'no';
// let answer: YesOrNo;
// answer = 'yes'; // OK
// answer = 'no'; // OK
// answer = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.

// type ButtonSize = "small" | "medium" | "large";

// function getButtonStyle(size: ButtonSize) {
//   switch (size) {
//     case "small":
//       return { fontSize: "10px", padding: "5px" };
//     case "medium":
//       return { fontSize: "14px", padding: "10px" };
//     case "large":
//       return { fontSize: "18px", padding: "15px" };
//     default:
//       return { fontSize: "14px", padding: "10px" };
//   }
// }

// let myButtonStyle = getButtonStyle("medium"); // OK
// myButtonStyle = getButtonStyle("extra-large"); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.
