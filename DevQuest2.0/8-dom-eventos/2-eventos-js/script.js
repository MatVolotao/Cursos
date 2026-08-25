const input = document.getElementById("nome");
const button = document.getElementById("btn");
const formBusca = document.getElementById("formBusca");

console.log("Input: ", input);
console.log("Button: ", button);

button.addEventListener("click", () => {
	console.log("O botão foi clicado!");
});

button.addEventListener("click", () => {
	console.log("O botão foi clicado!");
});

input.addEventListener("input", (event) => {
	console.log("Valor atual do input: ", event.target.value);
});

input.addEventListener("input", () => {
	//pegando o valor sem event
	console.log("Valor atual do input: ", input.value);
});

formBusca.addEventListener("submit", (event) => {
	event.preventDefault();
});
