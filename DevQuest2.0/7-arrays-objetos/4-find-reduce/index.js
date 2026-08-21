// find
// o que é e quando usar
// O método .find() é usado para encontrar o primeiro elemento em um array que satisfaça uma condição especificada em uma função de callback. Ele retorna o valor do primeiro elemento encontrado ou undefined se nenhum elemento atender à condição. É útil quando você precisa localizar um item específico em um array com base em critérios definidos.
const numeros = [1, 2, 3, 4, 5];
const numeroEncontrado = numeros.find((numero) => numero > 3); // retorna o primeiro elemento que satisfaz a condição, no caso, 4

console.log(numeroEncontrado);

//reduce
// o que é e quando usar
// O método .reduce() é usado para reduzir um array a um único valor, aplicando uma função de callback a cada elemento do array, acumulando o resultado. Ele é útil quando você deseja calcular somas, produtos, médias ou qualquer outro tipo de agregação de dados em um array.
const numerosParaReducao = [1, 2, 3, 4, 5];
const soma = numerosParaReducao.reduce((acumulador, numero) => acumulador + numero, 0); // o segundo argumento (0) é o valor inicial do acumulador

const carrinho = [
  { produto: 'Camiseta', preco: 50, quantidade: 2 }, // Total: 100
  { produto: 'Calça', preco: 120, quantidade: 1 },    // Total: 120
  { produto: 'Meia', preco: 15, quantidade: 3 }       // Total: 45
];

// Na sintaxe Short-hand
const valorTotalCompra = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);

console.log(valorTotalCompra); // 265