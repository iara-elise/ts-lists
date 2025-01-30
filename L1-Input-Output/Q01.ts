
import * as readline from 'readline-sync';

let num_01: number = parseFloat(readline.question("Valor 01: "));
let num_02: number = parseFloat(readline.question("Valor 02: "));

console.log();

let soma: number = num_01 + num_02;
console.log("SOMA: " + soma + "\n");

let subtracao: number = num_01 - num_02;
console.log("SUBTRAÇÃO: " + subtracao + "\n");

let multiplicacao: number = num_01 * num_02;
console.log("MULTIPLICALÇÃO: " + multiplicacao + "\n");

let divisao: number = num_01 / num_02;
console.log("DIVISÃO: " + divisao);
