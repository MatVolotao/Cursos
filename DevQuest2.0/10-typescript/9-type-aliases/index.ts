// ==========================================
// TYPE ALIASES
// ==========================================

// Type Alias permite criar um nome
// personalizado para um tipo.

// Usamos a palavra-chave "type".

type ID = string | number;

let usuarioId: ID;

usuarioId = 10;
usuarioId = "ABC123";

// Erro:
// usuarioId = true;


// ==========================================
// TYPE ALIAS COM OBJETO
// ==========================================

// Podemos criar um tipo que representa
// a estrutura de um objeto.

type Usuario = {
	nome: string;
	idade: number;
	email: string;
};

const usuario1: Usuario = {
	nome: "Beto",
	idade: 20,
	email: "beto@email.com"
};

console.log(usuario1);


// ==========================================
// REUTILIZANDO O MESMO TIPO
// ==========================================

const usuario2: Usuario = {
	nome: "Ana",
	idade: 25,
	email: "ana@email.com"
};

console.log(usuario2);


// ==========================================
// TYPE ALIAS EM FUNÇÕES
// ==========================================

// Podemos usar o Type Alias
// como tipo de um parâmetro.

function mostrarUsuario(usuario: Usuario): void {
	console.log(`Nome: ${usuario.nome}`);
	console.log(`Idade: ${usuario.idade}`);
	console.log(`Email: ${usuario.email}`);
}

mostrarUsuario(usuario1);


// ==========================================
// TYPE ALIAS COM UNION
// ==========================================

type StatusPedido = "pendente" | "pago" | "cancelado";

let statusAtual: StatusPedido;

statusAtual = "pendente";
statusAtual = "pago";

// Erro:
// statusAtual = "enviado";


// ==========================================
// OUTRO EXEMPLO COM OBJETO
// ==========================================

type Produto = {
	nome: string;
	preco: number;
	disponivel: boolean;
};

const produto: Produto = {
	nome: "Teclado",
	preco: 250,
	disponivel: true
};

console.log(produto);


// ==========================================
// RESUMO
// ==========================================

// Type Alias:
// -> cria um nome para um tipo
// -> usa a palavra-chave type
// -> evita repetir tipos
// -> pode representar objetos
// -> pode representar unions
// -> pode ser usado em funções
// -> melhora a organização e leitura do código