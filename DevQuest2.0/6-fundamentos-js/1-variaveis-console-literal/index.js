// para rodar na maquina, abra o terminal e digite o texto abaixo:
// node index.js

//variaveis

var name = "John";
console.log(name);
name = "Roberto";
console.log(name);

const name2 = "John";
console.log(name2);
// name2 = "Roberto"; // This will throw an error because name2 is a constant

let name3 = "John";
console.log(name3);
name3 = "Roberto";
console.log(name3);
// name3 = "Roberto"; // This will work because name3 is declared with let
// redeclaration of name3 is not allowed in the same scope
// let x var
// var is function-scoped, while let and const are block-scoped

// /================
// Escopo //
// /================
// global scope
var globalVar = "I am a global variable";
let idade = 45;

// local scope
function myFunction() {
  var localVar = "I am a local variable";
  console.log(idade);
  console.log(localVar); // This will work
}
console.log(globalVar); // This will work
// console.log(localVar); // This will throw an error because localVar is not defined in the global scope
myFunction();


let nome = "Ronaldo";
let sobrenome = "Santos";

const nomeCompleto = nome + " " + sobrenome; // maneira deselegante de concatenar strings
console.log(nomeCompleto);

// maneira elegante de concatenar strings - template literals
const nomeCompleto2 = `${nome} ${sobrenome}`;
console.log(nomeCompleto2);

// porque usar o segundo?
// O template literal é mais legível e fácil de usar, especialmente quando se tem muitas variáveis para concatenar.