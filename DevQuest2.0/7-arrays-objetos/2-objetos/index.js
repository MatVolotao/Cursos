// Um objeto, é uma estrutura de dados que armazena valores em pares chave valor.
const user = {
    nome: "Alice",
    idade: 30,
    email: "alice@example.com",
    apresentar: function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

console.log(user.nome); // Acessando o valor da chave "nome"
xonaolw.log(user["idade"]); // Acessando o valor da chave "idade" usando notação de colchetes - pouco usado, mas útil quando a chave é dinâmica ou contém caracteres especiais.
console.log(user.idade); // Acessando o valor da chave "idade"
console.log(user.email); // Acessando o valor da chave "email"

// adicionar novas propriedades ao objeto
user.endereco = "Rua das Flores, 123";
console.log(user.endereco); // Acessando o valor da nova chave "endereco"

//reatribuição de valores
user.nome = "Bob"; // Alterando o valor da chave "nome"
console.log(user.nome); // Acessando o valor da chave "nome" após a alteração

user.apresentar(); // Chamando o método "apresentar" do objeto user

// O que é o this e pra que serve?
// O this é uma palavra-chave que faz referência ao objeto atual no qual o código está sendo executado. 
// Ele é usado para acessar propriedades e métodos do próprio objeto, permitindo que você trabalhe com os dados internos do objeto de forma dinâmica.

// array de objetos

const produtos = [
    { nome: "Camiseta", preco: 29.99 },
    { nome: "Calça", preco: 49.99 },
    { nome: "Tênis", preco: 89.99 }
];

console.log(produtos[0].nome); // Acessando o nome do primeiro produto
console.log(produtos[1].preco); // Acessando o preço do segundo produto

produtos.forEach(produto => {
    console.log(`Produto: ${produto.nome}, Preço: R$${produto.preco}`);
});

// O que é e como funciona o forEach?
// O forEach é um método de array que permite percorrer todos os elementos de um array e executar uma função para cada elemento.
// Ele não retorna nenhum valor (ou seja, retorna undefined) e é usado principalmente para side effects, como imprimir valores no console ou fazer requisições HTTP.

// Quando usar o forEach?
// O forEach é útil quando você deseja iterar sobre todos os elementos de um array e realizar uma ação para cada elemento, sem a necessidade de criar um novo array.
