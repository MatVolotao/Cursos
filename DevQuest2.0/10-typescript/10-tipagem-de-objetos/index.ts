// ==========================================
// TIPAGEM DE OBJETOS
// ==========================================

// Podemos definir quais propriedades
// um objeto deve possuir e o tipo de cada uma.

let usuarioComTipagemDireta: {
	nome: string;
	idade: number;
};

usuarioComTipagemDireta = {
	nome: "Beto",
	idade: 20,
};

console.log(usuarioComTipagemDireta);

// ==========================================
// TIPAGEM DIRETA NO OBJETO
// ==========================================

const produtoComTipagemDireta: {
	nome: string;
	preco: number;
	disponivel: boolean;
} = {
	nome: "Teclado",
	preco: 250,
	disponivel: true,
};

console.log(produtoComTipagemDireta);

// ==========================================
// PROPRIEDADES OPCIONAIS
// ==========================================

// Usamos ? quando uma propriedade
// não precisa obrigatoriamente existir.

let cliente: {
	nome: string;
	idade: number;
	email?: string;
};

cliente = {
	nome: "Ana",
	idade: 25,
};

cliente = {
	nome: "Carlos",
	idade: 30,
	email: "carlos@email.com",
};

// ==========================================
// OBJETO COMO PARÂMETRO DE FUNÇÃO
// ==========================================

function mostrarUsuarioComTipagemDireta(usuario: { nome: string; idade: number }): void {
	console.log(`Nome: ${usuario.nome}`);
	console.log(`Idade: ${usuario.idade}`);
}

mostrarUsuarioComTipagemDireta({
	nome: "Beto",
	idade: 20,
});

// ==========================================
// OBJETOS DENTRO DE OBJETOS
// ==========================================

const pessoa: {
	nome: string;
	endereco: {
		cidade: string;
		estado: string;
	};
} = {
	nome: "Beto",
	endereco: {
		cidade: "São Paulo",
		estado: "SP",
	},
};

console.log(pessoa.endereco.cidade);

// ==========================================
// USANDO TYPE ALIAS
// ==========================================

// Quando a estrutura é reutilizada,
// podemos criar um Type Alias.

type UsuarioTipado = {
	nome: string;
	idade: number;
	email?: string;
};

const usuarioTipado1: UsuarioTipado = {
	nome: "Beto",
	idade: 20,
};

const usuarioTipado2: UsuarioTipado = {
	nome: "Ana",
	idade: 25,
	email: "ana@email.com",
};

console.log(usuarioTipado1);
console.log(usuarioTipado2);

// ==========================================
// RESUMO
// ==========================================

// Tipagem de objetos:
// -> define quais propriedades existem
// -> define o tipo de cada propriedade
// -> propriedades opcionais usam ?
// -> objetos podem ser usados em funções
// -> objetos podem conter outros objetos
// -> Type Alias evita repetir estruturas
