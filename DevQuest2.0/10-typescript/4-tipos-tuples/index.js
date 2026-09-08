"use strict";
// ==========================================
// TUPLES
// ==========================================
// Tuple é parecida com um Array,
// mas define o tipo de cada posição.
// Exemplo:
let usuario = ["Beto", 42];
// posição 0 -> string
// posição 1 -> number
console.log(usuario[0]); // Beto
console.log(usuario[1]); // 42
// ==========================================
// A ORDEM DOS TIPOS IMPORTA
// ==========================================
usuario = ["Carlos", 25]; // correto
// Erro:
// usuario = [25, "Carlos"];
// A primeira posição precisa ser string
// e a segunda precisa ser number.
// ==========================================
// TUPLE COM MAIS TIPOS
// ==========================================
let produto;
produto = ["Teclado", 250, true];
// string  -> nome
// number  -> preço
// boolean -> disponível
console.log(produto);
// ==========================================
// TUPLE COM NOMES NAS POSIÇÕES
// ==========================================
let pessoa;
pessoa = ["Ana", 30, true];
// Os nomes ajudam a entender
// o significado de cada posição.
// ==========================================
// ARRAY X TUPLE
// ==========================================
// Array:
// Pode ter vários elementos do mesmo tipo.
let nomes = [
    "Beto",
    "Ana",
    "Carlos"
];
// Tuple:
// Possui uma estrutura mais específica.
let dadosUsuario = [
    "Beto",
    42
];
// ==========================================
// RESUMO
// ==========================================
// Array:
// -> mais flexível
// -> vários elementos
// -> normalmente do mesmo tipo
// Tuple:
// -> quantidade e ordem definidas
// -> cada posição pode ter um tipo diferente
// -> a ordem dos valores importa
