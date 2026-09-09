// ==========================================
// TIPO ANY
// ==========================================

// O tipo any permite armazenar qualquer tipo de valor.
// Ele desativa grande parte da verificação de tipos
// daquela variável.

let valor: any = "Olá";

console.log(valor);


// ==========================================
// ANY PODE MUDAR DE TIPO
// ==========================================

valor = 42;
console.log(valor);

valor = true;
console.log(valor);

valor = [1, 2, 3];
console.log(valor);

valor = {
	nome: "Beto",
	idade: 20
};

console.log(valor);


// ==========================================
// PROBLEMA DO ANY
// ==========================================

let usuario: any = {
	nome: "Beto"
};

// O TypeScript não reclama,
// mesmo que essa propriedade não exista.

// console.log(usuario.idade.toFixed(2));

// Esse erro só apareceria durante a execução,
// porque idade é undefined.


// ==========================================
// ANY EM FUNÇÕES
// ==========================================

function mostrarValor(dado: any): void {
	console.log(dado);
}

mostrarValor("Texto");
mostrarValor(100);
mostrarValor(true);
mostrarValor({ nome: "Ana" });


// ==========================================
// EVITAR ANY QUANDO O TIPO É CONHECIDO
// ==========================================

// Evite:
let nomeUsuario: any = "Carlos";

// Prefira:
let idadeUsuario: number = 25;


// ==========================================
// RESUMO
// ==========================================

// any:
// -> aceita qualquer tipo de valor
// -> permite mudar o tipo da variável
// -> reduz a segurança do TypeScript
// -> pode esconder erros
// -> deve ser usado apenas quando necessário