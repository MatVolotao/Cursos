//o que é e os estados da promise

// Uma Promise é um objeto que representa a conclusão ou falha de uma operação assíncrona.
// Ela pode estar em um dos três estados:
// 1. Pending (pendente): Estado inicial, a operação ainda não foi concluída.
// 2. Fulfilled (cumprida): A operação foi concluída com sucesso.
// 3. Rejected (rejeitada): A operação falhou.

//exemplo ordenando uma pizza

const orderPizza = () => {
	return new Promise((resolve, reject) => {
		// Simulando uma operação assíncrona
		setTimeout(() => {
			const success = Math.random() > 0.5; // 50% de chance de sucesso
			if (success) {
				resolve("Pizza pronta!");
			} else {
				reject("Falha ao preparar a pizza.");
			}
		}, 3000);
	});
};

orderPizza()
	.then((message) => {
		console.log(message); // Pizza pronta!
	})
	.catch((error) => {
		console.error(error); // Falha ao preparar a pizza.
	});

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
	const message = await orderPizza();
	console.log(message); // Pizza pronta!

	const deliverPizzaMessage = await deliverPizza();
	console.log(deliverPizzaMessage);
};

orderPizzaAsync();
