//map - cria um novo array com base em um array já existente, aplicando uma função a cada elemento do array original.
const numeros = [1, 2, 3, 4, 5];

//quando é algum simples, podemos usar a arrow function de forma reduzida, sem o return e sem as chaves
const numerosDobrados = numeros.map((numero) => numero * 2);
console.log(numerosDobrados);

//versão completa, com o return e as chaves e index
const numerostriplicados = numeros.map((numero, index) => {
	console.log(`Índice: ${index}, Valor: ${numero}`);
	return numero * 3;
});

//filter - cria um novo array com base em um array já existente, aplicando uma função a cada elemento do array original e retornando apenas os elementos que atendem a uma condição.
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares);

const produtos = [
	{ nome: "Camisa", preco: 20 },
	{ nome: "Calça", preco: 40 },
	{ nome: "Tênis", preco: 60 },
	{ nome: "Meia", preco: 10 },
];

//versao short hand
const expensiveProdutos = produtos.filter((produto) => produto.preco > 20);
console.log(expensiveProdutos);

//versao completa
const cheapProdutos = produtos.filter((produto, index) => {
	console.log(`Índice: ${index}, Produto: ${produto.nome}, Preço: ${produto.preco}`);
	return produto.preco <= 20;
});
console.log(cheapProdutos);

//filter - explicação da IA
// O .filter() percorre um array e retorna um novo array apenas com os
// elementos que passaram no teste, ou seja, aqueles em que a callback retornou true.
// Ele nao altera o array original. Se nenhum item passar, retorna [].

// A callback pode receber o elemento, o indice e o array original:
const numerosComIndice = [5, 12, 8].filter((elemento, indice, arrayOriginal) => {
	console.log(elemento, indice, arrayOriginal);
	return elemento > 10;
});

// Evolucao da sintaxe: vamos filtrar numeros maiores que 10.
const numerosFilter = [5, 12, 8, 130, 44];

// Passo 1: funcao nomeada com if/else.
const maioresQueDezPasso1 = numerosFilter.filter(function testarNumero(numero) {
	if (numero > 10) {
		return true;
	} else {
		return false;
	}
});

console.log(maioresQueDezPasso1);

// Passo 2: a comparacao ja retorna true ou false, entao o if/else e desnecessario.
const maioresQueDezPasso2 = numerosFilter.filter(function (numero) {
	return numero > 10;
});

// Passo 3: convertendo a funcao anonima para arrow function.
const maioresQueDezPasso3 = numerosFilter.filter((numero) => {
	return numero > 10;
});

// Passo 4: com apenas um parametro, os parenteses sao opcionais.
const maioresQueDezPasso4 = numerosFilter.filter((numero) => {
	return numero > 10;
});

// Passo 5: retorno implicito, tambem chamado de short-hand.
const maioresQueDez = numerosFilter.filter((numero) => numero > 10);
console.log(maioresQueDez);

// Exemplo do mundo real: filtrando um array de objetos.
const produtosDetalhados = [
	{ nome: "Teclado", preco: 150, emEstoque: true },
	{ nome: "Mouse", preco: 80, emEstoque: false },
	{ nome: "Monitor", preco: 900, emEstoque: true },
];

// Pegar apenas produtos em estoque E com preço menor que 200 (na sintaxe Short-hand)
const disponiveisBaratos = produtosDetalhados.filter((p) => p.emEstoque && p.preco < 200);

console.log(disponiveisBaratos);
// Resultado: [{ nome: 'Teclado', preco: 150, emEstoque: true }]

//spread operator - copiar elementos de um array ou objetos
const numerosOriginais = [1, 2, 3, 4, 5];
const numerosCopia = [...numerosOriginais];
console.log(numerosCopia);

const produto1 = { nome: "Teclado", preco: 150 };
const produto2 = { ...produto1, nome: "Mouse", preco: 80 };
console.log(produto2);
