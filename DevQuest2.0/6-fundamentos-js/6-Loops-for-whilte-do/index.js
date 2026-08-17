/* ==========================================================================
   LOOPS (LAÇOS DE REPETIÇÃO) EM JAVASCRIPT
   ==========================================================================
   O que são Loops?
   São estruturas de controle de fluxo que permitem executar um mesmo bloco
   de código repetidas vezes, de forma automatizada, enquanto uma determinada
   condição for verdadeira (true).
   
   Eles evitam a repetição manual de código (princípio DRY - Don't Repeat Yourself),
   facilitando a manipulação de listas (arrays), contagens, processamentos em lote
   e execução de tarefas repetitivas.
========================================================================== */

/* ==========================================================================
   1. LOOP FOR (TRADICIONAL)
   ==========================================================================
   O que é:
   É a estrutura de repetição mais clássica e utilizada quando SABEMOS de
   antemão quantas vezes o bloco precisa ser executado (número fixo ou tamanho de um array).

   Sintaxe:
   for (inicialização; condição; incremento/decremento) {
       // Bloco de código a ser repetido
   }

   Como funciona o fluxo passo a passo:
   1. Inicialização: cria/inicia a variável contadora (executa apenas UMA vez no início).
   2. Condição: avalia a expressão lógica. Se for `true`, entra no loop. Se for `false`, o loop encerra.
   3. Execução: executa o bloco de código dentro das chaves { }.
   4. Incremento/Decremento: altera o valor do contador (ex: i++).
   5. Volta ao passo 2 até a condição se tornar `false`.
========================================================================== */

console.log("--- 1. LOOP FOR TRADICIONAL ---");

// Exemplo 1.1: Contagem crescente básica de 0 a 4
for (let i = 0; i < 5; i++) {
	console.log(`Contagem crescente: ${i}`);
}

// Exemplo 1.2: Contagem decrescente (ex: contagem regressiva de 5 até 1)
for (let i = 5; i >= 1; i--) {
	console.log(`Contagem regressiva: ${i}`);
}

// Exemplo 1.3: Incrementando de 2 em 2 (números pares de 0 a 10)
for (let i = 0; i <= 10; i += 2) {
	console.log(`Número par: ${i}`);
}

// Exemplo 1.4: Percorrendo um Array tradicionalmente usando o índice
const linguagens = ["JavaScript", "HTML", "CSS", "TypeScript", "Node.js"];

for (let i = 0; i < linguagens.length; i++) {
	console.log(`Posição ${i}: ${linguagens[i]}`);
}

// Exemplo 1.5: Controle de fluxo com 'break' (interrompe) e 'continue' (pula iteração)
console.log("\n--- Uso de break e continue no for ---");
for (let i = 1; i <= 6; i++) {
	if (i === 3) {
		console.log(`-> Pulando o número ${i} com 'continue'`);
		continue; // Pula para a próxima iteração sem executar o código abaixo
	}

	if (i === 5) {
		console.log(`-> Parando o loop no número ${i} com 'break'`);
		break; // Interrompe e encerra o loop imediatamente
	}

	console.log(`Número atual: ${i}`);
}

/* ==========================================================================
   VARIAÇÕES MODERNAS DO FOR: FOR...OF E FOR...IN
   ==========================================================================
   O JavaScript moderno (ES6+) introduziu variações mais legíveis e específicas:
   
   A) for...of:
      - Itera diretamente sobre os VALORES de estruturas iteráveis (Arrays, Strings, etc.).
      - Não precisa se preocupar com índice (`i`) ou tamanho (`.length`).
   
   B) for...in:
      - Itera sobre as CHAVES / PROPRIEDADES (nomes dos atributos) de um objeto ou índices de um array.
========================================================================== */

console.log("\n--- VARIAÇÕES DO FOR (for...of e for...in) ---");

// Exemplo A: for...of (ideal para iterar valores de Arrays)
const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

for (const fruta of frutas) {
	console.log(`Fruta (for...of): ${fruta}`);
}

// Exemplo B: for...in (ideal para iterar propriedades/chaves de Objetos)
const usuario = {
	nome: "Carlos",
	idade: 28,
	profissao: "Desenvolvedor",
};

for (const chave in usuario) {
	console.log(`Propriedade: ${chave} -> Valor: ${usuario[chave]}`);
}

/* ==========================================================================
   2. LOOP WHILE (ENQUANTO)
   ==========================================================================
   O que é:
   Executa um bloco de código ENQUANTO uma condição for verdadeira.
   O teste da condição é feito ANTES de entrar no bloco.
   Se a condição for falsa logo na primeira verificação, o código NUNCA será executado.

   Sintaxe:
   while (condição) {
       // Bloco de código a ser executado
       // IMPORTANTE: Atualização da variável de controle (para não criar loop infinito!)
   }

   Quando é mais usado:
   - Quando NÃO sabemos exatamente quantas vezes o laço vai rodar.
   - Depende de uma condição externa, entrada de usuário, sorteio, evento ou estado.
========================================================================== */

console.log("\n--- 2. LOOP WHILE ---");

// Exemplo 2.1: Contagem simples com while
let contadorWhile = 1;

while (contadorWhile <= 5) {
	console.log(`Contador While: ${contadorWhile}`);
	contadorWhile++; // Incremento obrigatório para evitar loop infinito!
}

// Exemplo 2.2: Situação em que o número de repetições é imprevisível
// Simulando rolar um dado até sair o número 6:
let numeroDado = 0;
let tentativas = 0;

while (numeroDado !== 6) {
	tentativas++;
	// Gera um número aleatório entre 1 e 6
	numeroDado = Math.floor(Math.random() * 6) + 1;
	console.log(`Tentativa ${tentativas}: rolou o número ${numeroDado}`);
}
console.log(`-> Sucesso! O número 6 foi obtido após ${tentativas} tentativa(s).`);

// Exemplo 2.3: Condição inicialmente falsa (O while NÃO executa nenhuma vez)
let testeInicial = 10;
while (testeInicial < 5) {
	console.log("Isso nunca será impresso, pois 10 não é menor que 5.");
}

/* ==========================================================================
   3. LOOP DO...WHILE (FAÇA... ENQUANTO)
   ==========================================================================
   O que é:
   É uma variação do `while`, com uma diferença crucial:
   A condição só é testada NO FINAL da repetição.
   Isso GARANTE que o bloco de código seja executado PELO MENOS UMA VEZ,
   mesmo que a condição seja falsa desde o início!

   Sintaxe:
   do {
       // Bloco de código a ser executado (executa no mínimo 1 vez)
       // Atualização da condição
   } while (condição);

   Quando é mais usado:
   - Quando precisamos executar uma ação antes de checar se devemos continuar
     (ex: exibir um menu pelo menos uma vez, pedir senha, tentar uma conexão inicial).
========================================================================== */

console.log("\n--- 3. LOOP DO...WHILE ---");

// Exemplo 3.1: Contagem básica com do...while
let contadorDoWhile = 1;

do {
	console.log(`Contador Do...While: ${contadorDoWhile}`);
	contadorDoWhile++;
} while (contadorDoWhile <= 3);

// Exemplo 3.2: PROVA de que executa pelo menos uma vez, mesmo com condição FALSA
let saldoBancario = 0;

do {
	// Esse bloco vai rodar 1 vez, mesmo com saldoBancario === 0
	console.log(`Consulta realizada. Saldo atual: R$ ${saldoBancario}`);
} while (saldoBancario > 0); // Condição é falsa (0 não é > 0), mas rodou uma vez!

/* ==========================================================================
   RESUMO COMPARATIVO: DIFERENÇAS E QUANDO USAR CADA UM
   ==========================================================================
   
   ┌─────────────┬──────────────────────────┬────────────────────────────────────────────────────────┐
   │ Loop        │ Quando a condição é avaliada? │ Quando é o melhor momento para usar?           │
   ├─────────────┼──────────────────────────┼────────────────────────────────────────────────────────┤
   │ for         │ Antes de cada iteração   │ Quando você SABE previamente o número de repetições    │
   │             │                          │ ou precisa de controle por índice (ex: 0 a 10).       │
   ├─────────────┼──────────────────────────┼────────────────────────────────────────────────────────┤
   │ for...of    │ Antes de cada iteração   │ Quando quer percorrer os VALORES de um Array/iterável  │
   │             │                          │ de forma limpa e direta sem usar índices.              │
   ├─────────────┼──────────────────────────┼────────────────────────────────────────────────────────┤
   │ for...in    │ Antes de cada iteração   │ Quando precisa percorrer as CHAVES/PROPRIEDADES de um  │
   │             │                          │ Objeto literal JavaScript.                             │
   ├─────────────┼──────────────────────────┼────────────────────────────────────────────────────────┤
   │ while       │ ANTES da primeira e de   │ Quando NÃO SABE o número de iterações e a repetição    │
   │             │ cada iteração            │ depende de uma condição que pode nem chegar a rodar.   │
   ├─────────────┼──────────────────────────┼────────────────────────────────────────────────────────┤
   │ do...while  │ DEPOIS de cada iteração  │ Quando o código PRECISA rodar OBRIGATORIAMENTE ao menos │
   │             │                          │ 1 vez antes de testar a condição.                      │
   └─────────────┴──────────────────────────┴────────────────────────────────────────────────────────┘
========================================================================== */
