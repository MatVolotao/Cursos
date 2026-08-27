/*
 * TEMA DA AULA: async, throw new, try/catch e finally
 *
 * Este arquivo simula um pedido de pizza para demonstrar como lidar com
 * operacoes assincronas, ou seja, tarefas que terminam depois, como esperar
 * uma resposta de uma API, um timer ou uma entrega.
 *
 * ASYNC E AWAIT
 * - Uma funcao marcada com async sempre retorna uma Promise.
 * - await pausa a execucao daquela funcao ate a Promise ser resolvida ou
 *   rejeitada, sem bloquear o restante do JavaScript.
 * - Com async/await, o codigo fica parecido com uma sequencia normal, mas
 *   continua sendo assincrono. Por isso, await so pode ser usado dentro de
 *   uma funcao async (ou no topo de alguns modulos JavaScript).
 *
 * THROW NEW X VERSAO ANTIGA/CLASSICA
 * - No estilo antigo, era comum fazer: throw "Mensagem de erro";
 *   Isso lanca apenas uma string, sem informacoes padronizadas do erro.
 * - A forma recomendada e: throw new Error("Mensagem de erro");
 *   O new cria uma instancia de Error, com mensagem, nome e stack trace,
 *   facilitando a investigacao e o tratamento do problema.
 * - O throw interrompe o fluxo normal. Em uma funcao async, ele faz a
 *   Promise ser rejeitada e o erro pode ser capturado pelo catch.
 *
 * TRY, CATCH E FINALLY
 * - try contem o codigo que pode falhar.
 * - catch recebe o erro e permite trata-lo sem quebrar todo o programa.
 * - finally executa sempre: tanto quando da certo quanto quando ocorre erro.
 *   E ideal para indicar o fim de um processo ou liberar recursos.
 *
 * RESOLVE E REJECT
 * - resolve representa o sucesso de uma Promise.
 * - reject representa a falha. Aqui ele recebe uma string para mostrar a
 *   diferenca; em aplicacoes reais, prefira reject(new Error("...")) tambem.
 */

const orderPizza = async (hasIngredients) => {
	console.log("Pedido da pizza enviado para a cozinha...");

	if (!hasIngredients) {
		throw new Error("Não temos ingredientes suficientes...");
	}

	await new Promise((resolve, reject) =>
		setTimeout(() => {
			// simula uma chance de 40% de dar erro
			const hasErrors = Math.random() < 0.2;

			if (hasErrors) {
				reject("Erro ao preparar a pizza.");
			} else {
				resolve("Pizza pronta!");
			}
		}, 1000),
	);

	return "Pizza pronta";
};

const deliverPizza = () => {
	return new Promise((resolve) => {
		console.log("A pizza está a caminho...");

		setTimeout(() => {
			resolve("Pizza entregue!");
		}, 3000);
	});
};

// utilizando async/await

const orderPizzaAsync = async () => {
	try {
		const message = await orderPizza();
		console.log(message); // Pizza pronta!

		const deliverPizzaMessage = await deliverPizza();
		console.log(deliverPizzaMessage);
	} catch (error) {
		console.error(error); // Falha ao preparar a pizza.
	} finally {
		console.log("Processo de pedido de pizza finalizado.");
	}
};
