// ==========================================
// TYPE ALIASES
// ==========================================

// Type Alias permite criar um nome
// personalizado para um tipo.

// Usamos a palavra-chave "type".

type TypeAliasId = string | number;

let usuarioTypeAliasId: TypeAliasId;

usuarioTypeAliasId = 10;
usuarioTypeAliasId = "ABC123";

// Erro:
// usuarioId = true;

// ==========================================
// TYPE ALIAS COM OBJETO
// ==========================================

// Podemos criar um tipo que representa
// a estrutura de um objeto.

type UsuarioTypeAlias = {
	nome: string;
	idade: number;
	email: string;
};

const usuarioTypeAlias1: UsuarioTypeAlias = {
	nome: "Beto",
	idade: 20,
	email: "beto@email.com",
};

console.log(usuarioTypeAlias1);

// ==========================================
// REUTILIZANDO O MESMO TIPO
// ==========================================

const usuarioTypeAlias2: UsuarioTypeAlias = {
	nome: "Ana",
	idade: 25,
	email: "ana@email.com",
};

console.log(usuarioTypeAlias2);

// ==========================================
// TYPE ALIAS EM FUNÇÕES
// ==========================================

// Podemos usar o Type Alias
// como tipo de um parâmetro.

function mostrarUsuarioComTypeAlias(usuario: UsuarioTypeAlias): void {
	console.log(`Nome: ${usuario.nome}`);
	console.log(`Idade: ${usuario.idade}`);
	console.log(`Email: ${usuario.email}`);
}

mostrarUsuarioComTypeAlias(usuarioTypeAlias1);

// ==========================================
// TYPE ALIAS COM UNION
// ==========================================

type StatusPedidoTypeAlias = "pendente" | "pago" | "cancelado";

let statusAtualTypeAlias: StatusPedidoTypeAlias;

statusAtualTypeAlias = "pendente";
statusAtualTypeAlias = "pago";

// Erro:
// statusAtualTypeAlias = "enviado";

// ==========================================
// OUTRO EXEMPLO COM OBJETO
// ==========================================

type ProdutoTypeAlias = {
	nome: string;
	preco: number;
	disponivel: boolean;
};

const produtoTypeAlias: ProdutoTypeAlias = {
	nome: "Teclado",
	preco: 250,
	disponivel: true,
};

console.log(produtoTypeAlias);

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
