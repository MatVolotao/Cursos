const gruta = ["Caverna", "Floresta", "Montanha", "Rio", "Deserto"];
console.log(gruta);

const lista = document.getElementById("lista");

// Usando forEach para criar elementos na lista.
gruta.forEach((local) => {
	const li = document.createElement("li");
	li.textContent = local;
	//document.getElementById("lista").appendChild(li);
	lista.appendChild(li);
});

const products = [
	{
		id: 1,
		name: "Camiseta Dev em Dobro Preta",
		image: "./assets/camiseta-1.png",
		price: 3500,
		color: "Preto",
		size: "M",
	},
	{
		id: 2,
		name: "Camiseta Dev em Dobro Roxa",
		image: "./assets/camiseta-2.png",
		price: 2500,
		color: "Roxa",
		size: "G",
	},
	{
		id: 3,
		name: "Camiseta Dev em Dobro Preta - Costas",
		image: "./assets/camiseta-1-costas.png",
		price: 1500,
		color: "Preto",
		size: "G",
	},
	{
		id: 4,
		name: "Camiseta Dev em Dobro Roxa - Costas",
		image: "./assets/camiseta-2-costas.png",
		price: 6000,
		color: "Roxa",
		size: "M",
	},
	{
		id: 5,
		name: "Caneca Dev em Dobro",
		image: "./assets/caneca.png",
		price: 500,
		color: "Branca",
		size: "M",
	},
];

// ==================== RENDERIZAÇÃO DOS PRODUTOS ====================
// A função renderizaProdutos reúne as instruções necessárias para mostrar os produtos na página.
// Uma função é um bloco de código que só é executado quando é chamado pelo nome.
// Neste caso, ela não recebe parâmetros, pois usa diretamente a lista products e o elemento lista.
//
// O innerHTML permite substituir o conteúdo HTML que está dentro do elemento lista.
//
// O método map percorre todos os itens do array products e cria um novo array.
// A cada repetição, o parâmetro item representa um produto diferente:
// na primeira repetição, item é o produto de id 1; na segunda, o de id 2; e assim por diante.
// As propriedades do produto são acessadas com ponto, por exemplo: item.name e item.price.
//
// Exemplo:
// products.map((item) => item.name);
// Esse código cria um novo array contendo apenas os nomes dos produtos.
// O map não altera o array products original.
//
// O texto entre crases é uma template string, usada para escrever HTML em várias linhas.
// ${item.name}, ${item.color} e as outras expressões são substituídas pelos valores do produto atual.
// O map retorna um array de textos HTML.
// join("") une esses textos sem inserir vírgulas entre eles.
function renderizaProdutos() {
	lista.innerHTML = products
		.map(
			(item) => `
     <div>
       <div>
         <p>${item.name}</p>
         <div>
           <p>Cor: ${item.color}</p>
           <p>Tamanho: ${item.size}</p>
         </div>
         <p>${item.price}</p>
         <button type='button'>Adicionar ao carrinho</button>
       </div>
     </div>
   `,
		)
		.join("");
}

// Chamar a função executa o código acima e renderiza todos os produtos na lista.
renderizaProdutos();
