// O DOM é a forma como o navegador interpreta o HTML e o transforma em uma estrutura de objetos que podem ser manipulados com JavaScript.
// Cada elemento é transformado em um objeto JavaScript, organizado em forma de árvore. Essa estrutura em árvore permite acessar, modificar, adicionar e remover elementos de uma página.

// O que é um seletor?
// Um seletor em JavaScript é a forma que usamos para encontrar e acessar elementos dentro do HTML de uma página, para depois manipular ou extrair informações deles.
// O seletor é o "endereço" usado para indicar qual elemento você quer pegar do DOM (Document Object Model).

// Quais são os seletores mais comuns?
// - getElementById
// - getElementsByClassName
// - querySelectorAll
// - querySelector

// getElementById - busca um elemento pelo atributo id. Retorna apenas um elemento, pois o id é único.
const titulo = document.getElementById("titulo");
console.log("Título: ", titulo);

// getElementsByClassName - busca elementos pelo atributo class. Retorna uma HTMLCollection (um array-like) com todos os elementos que possuem a classe especificada.
const paragrafos = document.getElementsByClassName("paragrafo");
console.log("Parágrafos: ", paragrafos);

// querySelector - busca um elemento usando um seletor CSS. Retorna apenas o primeiro elemento que corresponde ao seletor.
const primeiroParagrafo = document.querySelector(".paragrafo");
console.log("Primeiro parágrafo: ", primeiroParagrafo);

// querySelectorAll - busca todos os elementos usando um seletor CSS. Retorna uma NodeList (um array-like) com todos os elementos que correspondem ao seletor.
const todosOsParagrafos = document.querySelectorAll(".paragrafo");
console.log("Todos os parágrafos: ", todosOsParagrafos);

// getElementsByClassName x querySelectorAll
// getElementsByClassName retorna uma HTMLCollection viva: ela é atualizada automaticamente quando elementos são adicionados ou removidos do DOM.
// querySelectorAll retorna uma NodeList estática: ela representa os elementos encontrados no momento da busca e aceita qualquer seletor CSS.

// A NodeList retornada por querySelectorAll permite usar forEach diretamente.
todosOsParagrafos.forEach((paragrafo) => {
	console.log("Parágrafo encontrado: ", paragrafo);
});

// A HTMLCollection retornada por getElementsByClassName não possui forEach diretamente.
// Para usar forEach, transforme a coleção em um array com Array.from.
Array.from(paragrafos).forEach((paragrafo) => {
	console.log("Parágrafo pela classe: ", paragrafo);
});
