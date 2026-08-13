// == - operador de igual
const numero1 = 3
const numero2 = 3

const numero3 = 4
const numero4 = "4"

console.log(numero1 == numero2);
console.log(numero3 == numero4); // verdadeiro, porque o operador == faz a conversão de tipos antes de comparar os valores isso é chamado de coerção de tipos

// === - operador de igualdade estrita (identico)
console.log(numero3 === numero4); // falso, porque o operador === não faz a conversão de tipos antes de comparar os valores

// != - operador de diferente
console.log(numero1 != numero2); // falso, porque os valores são iguais
console.log(numero3 != numero4); // verdadeiro, porque os valores são diferentes

// !== - operador de diferente estrito (não identico)
console.log(numero3 !== numero4); // verdadeiro, porque os valores são diferentes e os tipos também são diferentes

// > - operador de maior que
console.log(numero3 > numero4); // falso, porque 4 não é maior que "4"

// >= - operador de maior ou igual
console.log(numero3 >= numero4); // verdadeiro, porque 4 é maior ou igual a "4"

// < - operador de menor que
console.log(numero3 < numero4); // falso, porque 4 não é menor que "4"

// <= - operador de menor ou igual
console.log(numero3 <= numero4); // verdadeiro, porque 4 é menor ou igual a "4"