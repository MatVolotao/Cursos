//desestruturação de objetos
// O que é?
// A desestruturação de objetos é uma sintaxe do JavaScript que permite extrair valores de objetos e atribuí-los a variáveis de forma concisa. Ela facilita o acesso a propriedades de objetos, tornando o código mais legível e reduzindo a necessidade de acessar cada propriedade individualmente.
const user = {
	nome: "João",
	idade: 30,
	email: "joao@example.com",
};

const user2 = {
	nome: "Maria",
	idade: 30,
	email: "maria@example.com",
	address: {
		rua: "Rua A",
		numero: 123,
		cidade: "São Paulo",
		estado: "SP",
	},
};

//desestruturação de objetos - sintaxe curta
const { nome, idade, email } = user;

//desestruturação de objetos - sintaxe completa
const { nome: nomeUsuario, idade: idadeUsuario, email: emailUsuario } = user;

//desestruturação de objetos - desestruturação de objetos aninhados
const {
	nome: nomeUsuario2,
	idade: idadeUsuario2,
	email: emailUsuario2,
	address: { rua, numero, cidade, estado },
} = user2;
