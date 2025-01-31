"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");

var somatorioNotas = 0;
var qtdNotas = 0;

for (var i = 1; i <= 3; i++) {
    var nota = parseFloat(readline.question("Nota " + i + ": "));

    somatorioNotas += nota;
    qtdNotas++;
}

var mediaArimetica = somatorioNotas / qtdNotas;
console.log("MÉDIA: " + mediaArimetica.toFixed(1));
