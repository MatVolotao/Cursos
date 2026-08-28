// o que é local storage?
// O localStorage é uma API do navegador que permite armazenar dados localmente no navegador do usuário, de forma persistente, ou seja, os dados permanecem armazenados mesmo após o fechamento da página ou do navegador.

localStorage.setItem("nome", "João");
localStorage.setItem("idade", "30");

// Colocando dados de objeto no localStorage
const usuario = {
	nome: "Maria",
	idade: 25,
};

// Para armazenar um objeto no localStorage, é necessário convertê-lo para uma string JSON usando JSON.stringify()
localStorage.setItem("usuario", JSON.stringify(usuario));

// Array de objetos
const filmes = [
	{ id: 1, titulo: "Filme 1", genero: "Ação" },
	{ id: 2, titulo: "Filme 2", genero: "Comédia" },
	{ id: 3, titulo: "Filme 3", genero: "Drama" },
];

// Para armazenar um array de objetos no localStorage, também é necessário convertê-lo para uma string JSON usando JSON.stringify()
localStorage.setItem("filmes", JSON.stringify(filmes));

// Recuperando dados do localStorage
const nome = localStorage.getItem("nome");
const idade = localStorage.getItem("idade");

// Para recuperar um objeto ou array de objetos do localStorage, é necessário convertê-lo de volta para um objeto JavaScript usando JSON.parse()
const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
const filmesSalvos = JSON.parse(localStorage.getItem("filmes"));

console.log(nome);
console.log(idade);
console.log(usuarioSalvo);
console.log(filmesSalvos);

/// removendo itens e objetos do localStorage
// Para remover um item específico do localStorage, podemos usar o método removeItem()
localStorage.removeItem("nome");

// Para remover todos os itens do localStorage, podemos usar o método clear()
localStorage.clear();


