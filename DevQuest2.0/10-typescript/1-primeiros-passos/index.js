"use strict";
const nome = "Beto";
let idade = 42;
const mandouEmail = true;
let idades = [12, 22, 39];
let nomes = [
    "Roberto",
    "Ricardo",
    "Raphael"
];
let outrasIdades = [12, 22, 39];
let obj = {
    x: 0
};
function imprimirCoordenadas(pt) {
    console.log("O valor de x é: " + pt.x);
    console.log("O valor de y é: " + pt.y);
}
imprimirCoordenadas({
    x: 3,
    y: 7
});
