console.log("Exercício 1: Faça um algoritmo declarando as variáveis A, B, C iniciando-as com os respectivos valores 10, 20 e 30, e imprima na tela se a soma de A + B é menor que C.");
let numberOne = 10;
let numberTwo = 20;
let numberThree = 30;

if ((numberOne + numberTwo) < numberThree) {
    console.log("A soma de A + B e menor que C");
}

console.log("Exercício 2: Faça um algoritmo declarando uma variável com um valor numérico qualquer e informe na tela se esse numero é par ou ímpar.");
let number = 4;
if (number % 2 === 0) {
    console.log("O número e par");
} else {
    console.log("O número e ímpar");
}

console.log("Exercício 3: Declare duas variáveis que armazenam valores boleanos(lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.");
let booleanOne = true;
let booleanTwo = false;
if (booleanOne && booleanTwo) {
    console.log("Ambos sao verdadeiros");
} else {
    console.log("Ambos sao falsos");
}

console.log("Exercício 4: Declare três variáveis que armazenam valores numéricos inteiros e diferentes e mostre-os em ordem decrescente.");
let numberOne1 = 10;
let numberTwo2 = 20;
let numberThree3 = 30;
if (numberThree3 > numberTwo2 && numberTwo2 > numberOne1) {
    console.log(numberThree3, numberTwo2, numberOne1);
}

console.log("Exercício 5: Escreva um algoritmo que receba dois números. Alerte em tela qual o maior valor recebido.");
let numberOne4 = 10;
let numberTwo5 = 20;
let maxNumber = Math.max(numberOne4, numberTwo5);
console.log(`O maior número é ${maxNumber}`);
