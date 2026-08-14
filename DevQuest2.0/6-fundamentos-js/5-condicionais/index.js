// As condicionais são estruturas de controle que permitem executar diferentes blocos de código com base em condições específicas. Em JavaScript, as principais estruturas condicionais são `if`, `else if`, `else` e o operador ternário e switch.

const filme = "O Poderoso Chefão";

if (filme === "O Senhor dos Anéis") {
	console.log("Filme favorito!");
} else if (filme === "O poderoso Chefão") {
	console.log("Filme não é o favorito.");
} else {
	console.log("Filme desconhecido.");
}

//operador ternário
// O operador ternário é uma forma concisa de escrever uma estrutura condicional. Ele possui a seguinte sintaxe: condição ? expressão1 : expressão2. Se a condição for verdadeira, a expressão1 será executada; caso contrário, a expressão2 será executada.

const idade = 18;
const mensagem = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
console.log(mensagem);

//switch
// O switch é uma estrutura condicional que permite testar uma variável em relação a diferentes valores. Ele possui a seguinte sintaxe: switch (variável) { case valor1: // código a ser executado break; case valor2: // código a ser executado break; default: // código a ser executado se nenhum dos casos anteriores for verdadeiro }.

const diaDaSemana = "quarta-feira";
switch (diaDaSemana) {
    case "segunda-feira":
        console.log("Hoje é segunda-feira.");
        break;
    case "terça-feira":
        console.log("Hoje é terça-feira.");
        break;
    case "quarta-feira":
        console.log("Hoje é quarta-feira.");
        break;
    case "quinta-feira":
        console.log("Hoje é quinta-feira.");
        break;
    case "sexta-feira":
        console.log("Hoje é sexta-feira.");
        break;
    default:
        console.log("Hoje é fim de semana.");
        break;
}