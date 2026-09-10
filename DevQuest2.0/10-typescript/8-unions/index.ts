// ==========================================
// UNION TYPES
// ==========================================

// Union permite que uma variável aceite
// mais de um tipo.

// Usamos o símbolo |

let id: number | string;

id = 10;
id = "ABC123";

// Erro:
// id = true;


// ==========================================
// UNION EM FUNÇÕES
// ==========================================

function mostrarId(id: number | string): void {
	console.log(id);
}

mostrarId(10);
mostrarId("USER-20");


// ==========================================
// VERIFICANDO O TIPO
// ==========================================

// Quando uma variável pode ter mais de um tipo,
// podemos verificar qual tipo ela possui.

function exibirValor(valor: number | string): void {
	if (typeof valor === "string") {
		console.log(valor.toUpperCase());
	} else {
		console.log(valor.toFixed(2));
	}
}

// Se for string:
exibirValor("typescript");

// Se for number:
exibirValor(25);


// ==========================================
// UNION COM MAIS DE DOIS TIPOS
// ==========================================

let dado: string | number | boolean;

dado = "Texto";
dado = 100;
dado = true;


// ==========================================
// UNION COM VALORES ESPECÍFICOS
// ==========================================

let statusPedido: "pendente" | "pago" | "cancelado";

statusPedido = "pendente";
statusPedido = "pago";

// Erro:
// statusPedido = "enviado";


// ==========================================
// RESUMO
// ==========================================

// Union:
// -> permite mais de um tipo
// -> usa o símbolo |
// -> pode ser usada em variáveis e funções
// -> pode limitar valores específicos
// -> typeof pode ser usado para verificar o tipo