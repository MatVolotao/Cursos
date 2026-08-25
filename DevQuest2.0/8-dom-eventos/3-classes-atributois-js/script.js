const quadrado = document.querySelector(".quadrado");

// printar
console.log("Quadrado: ", quadrado);

// pegar as classes do quadrado
const classesQuadrado = quadrado.classList;
console.log("Classes do quadrado: ", classesQuadrado);

// remover uma classe do quadrado
classesQuadrado.remove("vermelho");
console.log("Classes do quadrado após remover a classe 'vermelho': ", classesQuadrado);

// adicionar uma classe ao quadrado
// se a classe nao exister, ela ainda será adicionada
classesQuadrado.add("preto");
console.log("Classes do quadrado após adicionar a classe 'preto': ", classesQuadrado);

// tooggle - adiciona a classe se ela não existir, remove se ela existir
classesQuadrado.toggle("azul");
console.log("Classes do quadrado após toggle da classe 'azul': ", classesQuadrado);

// verificar se o quadrado possui a classe azul
const possuiClasseAzul = classesQuadrado.contains("azul");
console.log("O quadrado possui a classe 'azul'? ", possuiClasseAzul);

// mexendo com atributos dos elementos do html
const inputCor = document.getElementById("cor");

//setAttribute - adiciona ou altera um atributo do elemento
inputCor.setAttribute("value", "vermelho");

//getAttribute - pega o valor de um atributo do elemento
console.log("Valor do input 'cor': ", inputCor.getAttribute("value"));

//removeAttribute - remove um atributo do elemento
inputCor.removeAttribute("value");
console.log("Valor do input 'cor' após remover o atributo 'value': ", inputCor.getAttribute("value"));

