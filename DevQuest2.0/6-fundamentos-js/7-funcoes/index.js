//funções nomeadas
// O que são?
// Funções nomeadas são blocos de código reutilizáveis que podem ser chamados pelo seu nome. Elas permitem organizar o código, evitar repetição e facilitar a manutenção.
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
