//funções nomeadas
// O que são?
// Funções nomeadas são blocos de código reutilizáveis que podem ser chamados pelo seu nome. Elas permitem organizar o código, evitar repetição e facilitar a manutenção.
// tem hosting, ou seja, podem ser chamadas antes de serem declaradas.
function saudacao() {
	console.log("Olá, seja bem-vindo(a)!");
}
saudacao();

function welcome(nome) {
	console.log(`Olá, ${nome}, seja bem-vindo(a)!`);
}

welcome("João");

function mensagemPersonalizada(nome) {
	return `Olá, ${nome}, seja bem-vindo(a)!`;
}

console.log(mensagemPersonalizada("Maria"));

//funções anonimas
// não tem hosting, ou seja, não podem ser chamadas antes de serem declaradas.
const saudacaoAnonima = function () {
	console.log("Olá, seja bem-vindo(a)!");
};

saudacaoAnonima();
//quando usar
// Funções anônimas são úteis quando você precisa de uma função temporária ou quando a função é usada apenas uma vez. Elas também são frequentemente usadas em callbacks e em situações onde a função precisa ser passada como argumento para outra função.

// arrow functions
const saudacaoArrow = () => {
	console.log("Olá, seja bem-vindo(a)!");
};
//quando usar
// Arrow functions são úteis para funções curtas e simples, especialmente quando você precisa de uma função como argumento para outra função. Elas também são frequentemente usadas em métodos de array, como map, filter e reduce. Além disso, arrow functions não possuem seu próprio contexto de "this", o que pode ser vantajoso em certos casos.

