const nome = "Beto";

let idade: number = 42;

const mandouEmail: boolean = true;

let idades: number[] = [12, 22, 39];

let nomes: string[] = [
    "Roberto",
    "Ricardo",
    "Raphael"
];

let outrasIdades: Array<number> = [12, 22, 39];

let obj: any = {
    x: 0
};

function imprimirCoordenadas(pt: { x: number; y: number }) {
    console.log("O valor de x é: " + pt.x);
    console.log("O valor de y é: " + pt.y);
}

imprimirCoordenadas({
    x: 3,
    y: 7
});