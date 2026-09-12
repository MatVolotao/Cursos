// ==========================================
// GENERICS
// ==========================================

// Generics permitem criar códigos reutilizáveis
// sem perder a segurança dos tipos.

// O <T> representa um tipo que será definido
// quando a função for utilizada.

function retornarValor<T>(valor: T): T {
	return valor;
}

const texto = retornarValor("TypeScript");
const numero = retornarValor(100);
const ativo = retornarValor(true);

console.log(texto);
console.log(numero);
console.log(ativo);


// ==========================================
// GENERIC COM TIPO INFORMADO
// ==========================================

const nome = retornarValor<string>("Matheus");
const idade = retornarValor<number>(30);

console.log(nome);
console.log(idade);


// ==========================================
// GENERIC COM ARRAY
// ==========================================

// T[] significa um array do tipo T.

function primeiroElemento<T>(itens: T[]): T {
	return itens[0];
}

const primeiroNumero = primeiroElemento([10, 20, 30]);

const primeiroNome = primeiroElemento([
	"Ana",
	"Joao",
	"Carlos"
]);

console.log(primeiroNumero);
console.log(primeiroNome);


// ==========================================
// GENERIC COM INTERFACE
// ==========================================

// O tipo de "dados" será definido
// quando utilizarmos Resposta.

interface Resposta<T> {
	dados: T;
	sucesso: boolean;
}

interface Usuario {
	nome: string;
	idade: number;
}

const respostaUsuario: Resposta<Usuario> = {
	dados: {
		nome: "Matheus",
		idade: 30
	},
	sucesso: true
};

console.log(respostaUsuario);


// ==========================================
// OUTRO TIPO USANDO A MESMA INTERFACE
// ==========================================

const respostaNomes: Resposta<string[]> = {
	dados: [
		"Ana",
		"Joao",
		"Carlos"
	],
	sucesso: true
};

console.log(respostaNomes);


// ==========================================
// GENERIC X ANY
// ==========================================

// Com any, o TypeScript perde
// a informação do tipo.

function retornarComAny(valor: any): any {
	return valor;
}

const resultadoAny = retornarComAny("TypeScript");

// O TypeScript não consegue proteger bem esse valor.
// Ele permite métodos que podem não fazer sentido.

// resultadoAny.toFixed(2);


// ==========================================
// COM GENERIC
// ==========================================

function retornarComGeneric<T>(valor: T): T {
	return valor;
}

const resultadoGeneric = retornarComGeneric("TypeScript");

// O TypeScript sabe que é string.

console.log(resultadoGeneric.toUpperCase());

// Erro:
// resultadoGeneric.toFixed(2);


// ==========================================
// RESUMO
// ==========================================

// Generic:
// -> usa normalmente <T>
// -> permite trabalhar com vários tipos
// -> preserva o tipo recebido
// -> mantém a segurança do TypeScript
// -> evita repetição de código

// any:
// -> aceita qualquer tipo
// -> perde informação de tipo
// -> reduz a segurança

// Forma fácil de lembrar:
//
// any:
// "não me importo com o tipo"
//
// Generic:
// "não sei o tipo ainda,
//  mas quando souber quero preservá-lo"