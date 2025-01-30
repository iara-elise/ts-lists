"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");

var num_01 = parseFloat(readline.question("Número 01: "));
var num_02 = parseFloat(readline.question("Número 02: "));

console.log();

var soma = num_01 + num_02;
console.log("SOMA: " + soma + "\n");

var subtracao = num_01 - num_02;
console.log("SUBTRAÇÃO: " + subtracao + "\n");

var multiplicacao = num_01 * num_02;
console.log("MULTIPLICALÇÃO: " + multiplicacao + "\n");

var divisao = num_01 / num_02;
console.log("DIVISÃO: " + divisao);
