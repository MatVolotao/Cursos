// ==============================
// Tipagem explícita
// ==============================

let nome: string = "Beto";
let idade: number = 42;
let ativo: boolean = true;

let numeros: number[] = [10, 20, 30];


// ==============================
// Inferência de tipo
// ==============================

let cidade = "São Paulo"; // TypeScript entende como string
let ano = 2026;           // TypeScript entende como number
let aprovado = true;      // TypeScript entende como boolean


// ==============================
// Função com tipos
// ==============================

function somar(a: number, b: number): number {
    return a + b;
}

const resultado = somar(10, 5);

console.log(resultado);