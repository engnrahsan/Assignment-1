"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.
let car = {
    name: 'Honda',
    model: 2023,
    color: 'White'
};
let car1 = {
    name: "civic",
    model: 2022,
    color: "black"
};
let car2 = {
    name: "kiasportage",
    model: 2022,
    color: "blue"
};
let car3 = {
    name: "fortuner",
    model: 2023,
    color: "gray"
};
let objects = [car, car1, car2, car3];
let cars = [];
objects.forEach((i) => {
    cars.push(i);
});
console.log(cars);
