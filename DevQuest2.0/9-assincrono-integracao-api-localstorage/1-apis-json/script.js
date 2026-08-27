// o que é aps

// navegador -> apis -> json -> localstorage
// localstora -> json -> navegador -> apis

/*
O que é JSON na prática?

JSON é uma forma padronizada de representar dados usando texto. Ele é muito usado pra trocar informações entre sistemas diferentes.

Por que tu receberia JSON como string?

- Lendo um arquivo: Se tu tiver um arquivo .json no teu projeto e ler ele
- Dados salvos no localStorage: O localStorage só guarda texto, então se tu salvar um objeto lá, ele vira string
- Recebendo de uma API: APIs mandam dados como texto, não como objetos JavaScript
- Mensagens entre sistemas: Quando sistemas diferentes precisam trocar informações
*/

// isso é um objeto
const hero = {
    name: "Superman",
    realName: "Clark Kent",
    powers: ["flight", "super strength", "x-ray vision"],
    universe: "DC"
};

console.log("Objeto JavaScript:", hero);
console.log("Nome do herói:", hero.name);
console.log("Nome real do herói:", hero.realName);
console.log("Poderes do herói:", hero.powers);
console.log("Universo do herói:", hero.universe);


// isso é um json

const heroJson = `{
    "name": "Superman",
    "realName": "Clark Kent",
    "powers": ["flight", "super strength", "x-ray vision"],
    "universe": "DC"
}`;

// typeof heroJson -> string
console.log("String JSON:", heroJson);

// transformando o JSON em objeto JavaScript
const heroObj = JSON.parse(heroJson);

console.log("Objeto JavaScript a partir do JSON:", heroObj);

// trasforma o json em uma string
const heroString = JSON.stringify(heroObj);

console.log("String JSON a partir do objeto JavaScript:", heroString);

