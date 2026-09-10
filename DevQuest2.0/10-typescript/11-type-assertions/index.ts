// ==========================================
// TYPE ASSERTIONS
// ==========================================

// Type Assertion é usada quando sabemos
// mais sobre o tipo de um valor do que
// o TypeScript consegue identificar.

// A forma mais comum é usar "as".

let valor: unknown = "TypeScript";

let texto = valor as string;

console.log(texto.length);

// ==========================================
// TYPE ASSERTION NÃO CONVERTE VALORES
// ==========================================

let dado: unknown = "123";

// Estamos apenas dizendo ao TypeScript
// para considerar esse valor como number.

// Isso NÃO transforma a string em número.

// let numero = dado as number;

// Para converter de verdade:
let numeroConvertido = Number(dado);

console.log(numeroConvertido);

// ==========================================
// TYPE ASSERTION COM DOM
// ==========================================

// getElementById retorna:
// HTMLElement | null

// Se sabemos que o elemento é um input,
// podemos usar Type Assertion.

const input = document.getElementById("nome") as HTMLInputElement;

// Agora o TypeScript entende que
// podemos acessar propriedades de um input.

console.log(input.value);

// ==========================================
// OUTRA SINTAXE
// ==========================================

let outroValor: unknown = "Olá";

// Forma recomendada:
let mensagem = outroValor as string;

// Também existe:
// let mensagem2 = <string>outroValor;

// Porém, "as" é mais utilizada,
// principalmente por funcionar melhor com TSX.

console.log(mensagem);

// ==========================================
// TYPE ANNOTATION X TYPE ASSERTION
// ==========================================

// Type Annotation:
// define o tipo da variável.

let nome: string = "Beto";

// Type Assertion:
// diz ao TypeScript como tratar um valor.

let valorNome: unknown = "Ana";

let nome2 = valorNome as string;

// ==========================================
// RESUMO
// ==========================================

// Type Assertion:
// -> usa normalmente "as"
// -> informa ao TypeScript qual tipo considerar
// -> não converte o valor
// -> é comum ao trabalhar com DOM
// -> deve ser usada quando temos certeza do tipo
// -> deve ser usada com cuidado
