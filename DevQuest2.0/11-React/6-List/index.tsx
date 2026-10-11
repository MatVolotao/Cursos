
import { useState } from "react";

// ============================================================
// LISTAS NO REACT — RENDERIZAÇÃO DE ARRAYS
// ============================================================
//
// React permite renderizar múltiplos elementos a partir
// de um array JavaScript.
//
// Normalmente utilizamos o método .map() para percorrer
// um array e transformar cada elemento em JSX.
//
// Exemplo:
//
// const names = ["Ana", "Carlos", "Maria"];
//
// names.map((name) => <li>{name}</li>);
//
// Cada string do array é transformada em um elemento <li>.
//
// PRINCIPAIS CONCEITOS:
//
// - Arrays.
// - Método .map().
// - Renderização de JSX.
// - Propriedade key.
// - Listas de objetos.
// - Props e tipagem TypeScript.
// - Método .filter().
// - Método .find().
// - Renderização condicional.
// - Atualização imutável de arrays com useState.

// ============================================================
// 1. LISTA SIMPLES DE STRINGS
// ============================================================

// Um array é uma estrutura utilizada para armazenar
// múltiplos valores em uma única variável.
//
// O tipo string[] indica um array de strings.

const technologies: string[] = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
];

// Este componente recebe o array technologies e
// apresenta cada tecnologia em um elemento <li>.

const TechnologyList = () => {
	return (
		<section>
			<h2>Lista de Tecnologias</h2>

			<ul>
				{/*
					.map() percorre cada elemento do array.

					A função callback recebe o elemento atual.

					technologies.map((technology) => ...)

					Em cada execução:
					technology recebe uma string diferente.

					1ª execução → "HTML"
					2ª execução → "CSS"
					3ª execução → "JavaScript"

					O retorno da função é o elemento JSX.

					O .map() produz um novo array com
					os elementos retornados.
				*/}

				{technologies.map((technology) => (
					<li key={technology}>{technology}</li>
				))}
			</ul>
		</section>
	);
};

// ============================================================
// 2. O QUE É A PROPRIEDADE key?
// ============================================================

// React utiliza a propriedade key para identificar
// elementos dentro de uma lista.
//
// Essa identidade ajuda o React a reconhecer quais itens
// foram adicionados, removidos ou reorganizados.
//
// A key deve ser:
//
// - Única entre os elementos irmãos da lista.
// - Estável entre as renderizações.
//
// Exemplo:
//
// <li key={technology}>{technology}</li>
//
// No exemplo anterior, usamos a própria string porque
// sabemos que as tecnologias não estão repetidas.
//
// Se houvesse duas tecnologias com o mesmo texto,
// as keys seriam duplicadas.
//
// Em listas de objetos, normalmente utilizamos um ID.
//
// Exemplo:
//
// <li key={product.id}>{product.name}</li>
//
// IMPORTANTE:
//
// A key é uma informação especial utilizada pelo React.
//
// Ela não é recebida automaticamente como uma prop
// comum dentro de um componente filho.
//
// Se o componente precisar do ID, devemos passá-lo
// explicitamente:
//
// <ProductItem key={product.id} id={product.id} />

// ============================================================
// 3. TIPAGEM DE UMA LISTA DE OBJETOS
// ============================================================

// Arrays também podem armazenar objetos.
//
// Cada objeto pode possuir várias propriedades.
//
// Neste exemplo, definimos uma interface Product.

interface Product {
	id: number;
	name: string;
	price: number;
	category: string;
	inStock: boolean;
}

// Product[] indica um array de objetos do tipo Product.
//
// O TypeScript verifica se os elementos possuem
// as propriedades definidas na interface.

const products: Product[] = [
	{
		id: 1,
		name: "Camiseta Preta",
		price: 89,
		category: "Roupas",
		inStock: true,
	},
	{
		id: 2,
		name: "Camiseta Roxa",
		price: 99,
		category: "Roupas",
		inStock: true,
	},
	{
		id: 3,
		name: "Caneca Branca",
		price: 29,
		category: "Acessórios",
		inStock: false,
	},
	{
		id: 4,
		name: "Caneca Preta",
		price: 35,
		category: "Acessórios",
		inStock: true,
	},
];

// ============================================================
// 4. RENDERIZANDO OBJETOS COM map()
// ============================================================

const ProductList = () => {
	return (
		<section>
			<h2>Lista de Produtos</h2>

			<ul>
				{products.map((product) => (
					<li key={product.id}>
						{/* Acessamos as propriedades do objeto. */}
						<h3>{product.name}</h3>

						<p>Preço: R$ {product.price.toFixed(2)}</p>

						<p>Categoria: {product.category}</p>

						{/*
							Operador ternário:

							condição ? valorSeTrue : valorSeFalse

							Se inStock for true:
							Exibe "Disponível".

							Caso contrário:
							Exibe "Esgotado".
						*/}
						<p>
							{product.inStock
								? "Disponível"
								: "Esgotado"}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};

// ============================================================
// 5. FILTRANDO UMA LISTA COM filter()
// ============================================================

// O método .filter() percorre um array e cria outro
// contendo apenas os elementos que satisfazem uma condição.
//
// Exemplo:
//
// const availableProducts = products.filter(
//     (product) => product.inStock
// );
//
// O resultado será um array contendo apenas os
// produtos cuja propriedade inStock seja true.
//
// DIFERENÇA:
//
// .map():
// Transforma os elementos em um novo array.
//
// .filter():
// Seleciona elementos que atendem a uma condição.
//
// Os dois métodos retornam arrays.

// Exemplo de uma lista filtrada.

const AvailableProducts = () => {
	const availableProducts = products.filter(
		(product) => product.inStock
	);

	return (
		<section>
			<h2>Produtos Disponíveis</h2>

			<ul>
				{availableProducts.map((product) => (
					<li key={product.id}>
						{product.name} — R$ {product.price.toFixed(2)}
					</li>
				))}
			</ul>
		</section>
	);
};

// ============================================================
// 6. PROCURANDO UM ELEMENTO COM find()
// ============================================================

// O método .find() procura o PRIMEIRO elemento que
// satisfaz uma condição.
//
// Diferentemente de .filter(), ele não retorna um array.
//
// Retorna:
//
// - O elemento encontrado.
// - undefined, caso não encontre.
//
// Exemplo:
//
// const product = products.find((item) => item.id === 2);
//
// Resultado:
//
// {
//     id: 2,
//     name: "Camiseta Roxa",
//     ...
// }
//
// Se procurarmos ID 999:
//
// const product = products.find((item) => item.id === 999);
//
// Resultado:
//
// undefined

const ProductDetails = () => {
	const selectedProduct = products.find(
		(product) => product.id === 2
	);

	// Como find pode retornar undefined,
	// precisamos verificar antes de acessar propriedades.

	if (!selectedProduct) {
		return <p>Produto não encontrado.</p>;
	}

	return (
		<section>
			<h2>Produto Selecionado</h2>

			<p>{selectedProduct.name}</p>

			<p>R$ {selectedProduct.price.toFixed(2)}</p>
		</section>
	);
};

// ============================================================
// 7. LISTAS DINÂMICAS COM useState
// ============================================================

// Até agora trabalhamos com arrays fixos.
//
// Mas em aplicações reais, normalmente precisamos
// adicionar, remover e atualizar os elementos.
//
// Para isso, podemos armazenar o array no estado do React.

interface Task {
	id: string;
	text: string;
	completed: boolean;
}

const TaskList = () => {
	// O estado armazena um array de tarefas.
	//
	// Task[] informa o tipo de cada elemento.
	//
	// O array inicial possui duas tarefas.

	const [tasks, setTasks] = useState<Task[]>([
		{
			id: "task-1",
			text: "Estudar listas no React",
			completed: false,
		},
		{
			id: "task-2",
			text: "Praticar o método map",
			completed: true,
		},
	]);

	// Estado local utilizado para controlar qual
	// filtro será aplicado à lista.
	//
	// O tipo literal limita os valores possíveis.

	const [filter, setFilter] = useState<
		"all" | "active" | "completed"
	>("all");

	// ========================================================
	// 8. ADICIONANDO ELEMENTOS
	// ========================================================

	const addTask = () => {
		// Cria uma nova tarefa.
		//
		// crypto.randomUUID() gera um identificador único
		// adequado para novos itens desta lista no navegador.

		const newTask: Task = {
			id: crypto.randomUUID(),
			text: `Nova tarefa ${tasks.length + 1}`,
			completed: false,
		};

		// Nunca devemos modificar diretamente o array
		// armazenado no estado.
		//
		// Evite:
		//
		// tasks.push(newTask);
		//
		// Isso altera o array existente.
		//
		// A abordagem recomendada cria um novo array.

		setTasks((prev) => [
			// Copia os elementos anteriores.
			...prev,

			// Adiciona o novo objeto ao final.
			newTask,
		]);

		// O operador spread (...) espalha os elementos
		// do array anterior dentro do novo array.
	};

	// ========================================================
	// 9. REMOVENDO ELEMENTOS
	// ========================================================

	const removeTask = (id: string) => {
		// .filter() retorna apenas as tarefas
		// cujo ID seja diferente do ID removido.
		//
		// Isso cria um novo array sem modificar o anterior.

		setTasks((prev) =>
			prev.filter((task) => task.id !== id)
		);
	};

	// ========================================================
	// 10. ATUALIZANDO ELEMENTOS
	// ========================================================

	const toggleTask = (id: string) => {
		// .map() percorre cada tarefa.
		//
		// Se o ID for correspondente:
		// Retorna um novo objeto com completed invertido.
		//
		// Caso contrário:
		// Retorna a tarefa original.

		setTasks((prev) =>
			prev.map((task) => {
				if (task.id === id) {
					return {
						// Copia todas as propriedades anteriores.
						...task,

						// Sobrescreve apenas completed.
						completed: !task.completed,
					};
				}

				return task;
			})
		);
	};

	// ========================================================
	// 11. FILTRAGEM DINÂMICA
	// ========================================================

	// filteredTasks é um valor derivado de tasks e filter.
	//
	// Não precisamos de outro useState para armazená-lo.
	//
	// Sempre que o componente renderizar novamente,
	// o array será calculado com os valores atuais.

	const filteredTasks = tasks.filter((task) => {
		if (filter === "active") {
			return !task.completed;
		}

		if (filter === "completed") {
			return task.completed;
		}

		// "all": mantém todas as tarefas.
		return true;
	});

	// ========================================================
	// 12. RENDERIZAÇÃO CONDICIONAL
	// ========================================================

	// Podemos exibir uma mensagem quando não existem
	// elementos na lista filtrada.
	//
	// O operador === compara valor e tipo.

	const isEmpty = filteredTasks.length === 0;

	return (
		<section>
			<h2>Lista Dinâmica de Tarefas</h2>

			{/* Adiciona uma nova tarefa ao estado. */}
			<button onClick={addTask}>
				Adicionar tarefa
			</button>

			{/* Botões para modificar o filtro. */}
			<div>
				<button onClick={() => setFilter("all")}>
					Todas
				</button>

				<button onClick={() => setFilter("active")}>
					Ativas
				</button>

				<button onClick={() => setFilter("completed")}>
					Concluídas
				</button>
			</div>

			{/* 
				Se a lista filtrada estiver vazia,
				apresentamos uma mensagem.

				Caso contrário, apresentamos a lista.
			*/}

			{isEmpty ? (
				<p>Nenhuma tarefa encontrada.</p>
			) : (
				<ul>
					{filteredTasks.map((task) => (
						<li key={task.id}>
							{/* 
								O estilo line-through risca o texto
								quando a tarefa está concluída.
							*/}
							<span
								style={{
									textDecoration: task.completed
										? "line-through"
										: "none",
								}}
							>
								{task.text}
							</span>

							{/* 
								Utilizamos uma arrow function
								para passar o ID ao manipulador.

								Se escrevêssemos toggleTask(task.id)
								diretamente no onClick, a função
								seria executada durante a renderização.
							*/}
							<button onClick={() => toggleTask(task.id)}>
								{task.completed
									? "Reativar"
									: "Concluir"}
							</button>

							<button onClick={() => removeTask(task.id)}>
								Remover
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

// ============================================================
// 13. CUIDADOS IMPORTANTES COM LISTAS
// ============================================================
//
// KEY:
//
// Use identificadores estáveis.
//
// Preferencialmente:
//
// key={item.id}
//
// Evite utilizar o índice do array como key
// quando itens podem ser adicionados, removidos
// ou reorganizados.
//
// O índice representa a posição, não a identidade.
//
// ------------------------------------------------------------
//
// MUTABILIDADE:
//
// Evite modificar diretamente arrays armazenados
// no estado.
//
// INCORRETO:
//
// tasks.push(newTask);
// tasks.splice(0, 1);
//
// CORRETO:
//
// setTasks((prev) => [...prev, newTask]);
//
// setTasks((prev) =>
//     prev.filter((task) => task.id !== id)
// );
//
// ------------------------------------------------------------
//
// MÉTODOS:
//
// .map()    → Transforma elementos.
// .filter() → Seleciona elementos.
// .find()   → Encontra o primeiro elemento correspondente.
//
// ------------------------------------------------------------
//
// KEY NÃO É PROP:
//
// <Task key={task.id} />
//
// A propriedade key não é recebida como uma prop comum
// dentro do componente Task.
//
// Se precisar do identificador:
//
// <Task key={task.id} id={task.id} />

// ============================================================
// 14. COMPONENTE PRINCIPAL
// ============================================================

function App() {
	return (
		<main>
			<h1>Listas no React</h1>

			<TechnologyList />

			<hr />

			<ProductList />

			<hr />

			<AvailableProducts />

			<hr />

			<ProductDetails />

			<hr />

			<TaskList />
		</main>
	);
}

export default App;

// ============================================================
// RESUMO FINAL — LISTAS NO REACT
// ============================================================
//
// ARRAYS:
// Estruturas que armazenam múltiplos valores.
//
// .map():
// Percorre um array e retorna outro array.
//
// JSX:
// Utilizado para representar a interface.
//
// key:
// Identifica elementos entre irmãos de uma lista.
//
// interface:
// Define a estrutura dos objetos no TypeScript.
//
// .filter():
// Cria um array com elementos que atendem a uma condição.
//
// .find():
// Retorna o primeiro elemento correspondente ou undefined.
//
// useState():
// Permite armazenar e atualizar listas dinâmicas.
//
// SPREAD (...):
// Copia elementos ou propriedades para novas estruturas.
//
// ATUALIZAÇÃO IMUTÁVEL:
// Cria novos arrays e objetos em vez de alterar
// diretamente os valores armazenados no estado.
//
// RENDERIZAÇÃO CONDICIONAL:
// Apresenta conteúdos diferentes conforme uma condição.
//
// ============================================================
// CONCEITO CENTRAL
// ============================================================
//
// O React pode transformar arrays em elementos de interface.
//
// Exemplo:
//
// products.map((product) => (
//     <li key={product.id}>
//         {product.name}
//     </li>
// ));
//
// Quando o array está no estado, atualizações devem
// produzir novas estruturas para que o React possa
// processar corretamente as mudanças.
//
// A propriedade key ajuda o React a preservar
// a identidade correta dos elementos.
