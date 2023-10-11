import {
  genericFunction,
  genericFunctionArrow,
  printObject,
} from "../generics/generics";
import { Villian, Hero } from "../interfaces";

// printObject(123);
// printObject(new Date());
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// printObject("Hola mundo");

// const name: string = "Fernando";

// console.log(genericFunction(23453123).toFixed(2));
// console.log(genericFunction(new Date()).getDate());

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villian>(deadpool));
