// ==========================================
// VERIFICAÇÃO DE TIPO ESTÁTICO
// ==========================================

// O TypeScript verifica os tipos do código
// antes do programa ser executado.

// Exemplo com variável:

let idade: number = 20;

// Correto:
idade = 25;

// Erro:
// idade = "vinte";
// Não podemos colocar uma string em uma variável do tipo number.


// ==========================================
// EXEMPLO COM FUNÇÃO
// ==========================================

function somar(a: number, b: number): number {
	return a + b;
}

// Correto:
const resultado = somar(10, 5);

console.log(resultado);

// Erro:
//somar(10, "5");

// O TypeScript identifica que "5" é uma string,
// mas a função espera receber dois numbers.


// ==========================================
// EXEMPLO COM OBJETO
// ==========================================

function mostrarUsuario(usuario: {
	nome: string;
	idade: number;
}) {
	console.log(usuario.nome);
	console.log(usuario.idade);
}

mostrarUsuario({
	nome: "Beto",
	idade: 42,
});

// Erro:
// mostrarUsuario({
// 	nome: "Beto",
// 	idade: "42",
// });


// ==========================================
// RESUMO
// ==========================================

// Verificação de tipo estático:
// O TypeScript analisa os tipos antes da execução
// e avisa quando estamos utilizando um tipo incorreto.

// TypeScript
//      ↓
// Verifica os tipos
//      ↓
// Mostra possíveis erros
//      ↓
// Compila para JavaScript
//      ↓
// JavaScript é executado