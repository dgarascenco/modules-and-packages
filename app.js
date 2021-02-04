// MODULE: main - используем тлолько математические функции из модуля math.js
console.log("App starting...");

const {add, sub, mul, div} = require("./math")
const {isNumber} = require("./types")

let temperatures = require("./temperatures.json")

let middle_temperature = 0;
let count_errors = 0;

temperatures.forEach( temperature =>  isNumber(temperature) ? middle_temperature = add(middle_temperature, temperature) : count_errors = add(count_errors, 1) )

console.log("Средняя температура поступивших данных:", div( middle_temperature, sub(temperatures.length, count_errors) ) );
console.log("Погрешность вычислений составляет: " + div( mul( count_errors, 100), temperatures.length)  + "%");

console.log("App finished");