
// With TypeScript, you can create complexs types by combining simple ones.
// There are two popular ways to do so: with unions, and generis:

// Unions

// With a union, you can declare that a type could be one of many types.
// For example, you can describe a boolean type as being either true or false:
type MyBool = true | false;

// A popular use-case for union types is to describe the set of string or numberl literals that a value is allowed to be:
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Unions provide a way to handle different types too.
// For example, you may have a function that takes an array or a string:
function getLenght(obj: string | string[]) {
  return obj.length;
}

// To learn the tpye of a variable, use typeof:
// For example, you can make a function return different values depending on whether it is passed a string or an array:
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

// Generics

// Generics provide variables to types. A common example is an array.
// An array withouth generics could contain anything.
// An array with generics can describe the values that the array contains.
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// You can delcare your own types that use generics;
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add("Laptop");