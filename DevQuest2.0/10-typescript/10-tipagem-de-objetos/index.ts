// ==========================================
// TIPAGEM DE OBJETOS
// ==========================================

// Podemos definir quais propriedades
// um objeto deve possuir e o tipo de cada uma.

let usuario: {
	nome: string;
	idade: number;
};

usuario = {
	nome: "Beto",
	idade: 20
};

console.log(usuario);


// ==========================================
// TIPAGEM DIRETA NO OBJETO
// ==========================================

const produto: {
	nome: string;
	preco: number;
	disponivel: boolean;
} = {
	nome: "Teclado",
	preco: 250,
	disponivel: true
};

console.log(produto);


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
	idade: 25
};

cliente = {
	nome: "Carlos",
	idade: 30,
	email: "carlos@email.com"
};


// ==========================================
// OBJETO COMO PARÂMETRO DE FUNÇÃO
// ==========================================

function mostrarUsuario(usuario: {
	nome: string;
	idade: number;
}): void {
	console.log(`Nome: ${usuario.nome}`);
	console.log(`Idade: ${usuario.idade}`);
}

mostrarUsuario({
	nome: "Beto",
	idade: 20
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
		estado: "SP"
	}
};

console.log(pessoa.endereco.cidade);


// ==========================================
// USANDO TYPE ALIAS
// ==========================================

// Quando a estrutura é reutilizada,
// podemos criar um Type Alias.

type Usuario = {
	nome: string;
	idade: number;
	email?: string;
};

const usuario1: Usuario = {
	nome: "Beto",
	idade: 20
};

const usuario2: Usuario = {
	nome: "Ana",
	idade: 25,
	email: "ana@email.com"
};

console.log(usuario1);
console.log(usuario2);


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