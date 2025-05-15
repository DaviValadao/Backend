// (1)- Escreva um programa que declare duas variáveis, “nome” e “idade”, e as
//imprima em um console em uma frase que diga “Olá, meu nome é [nome]
//e eu tenho [idade] anos”.

let nome = "Davi Valadão"
let idade = 15;
console.log("Olá meu nome é" +nome+ "e eu tenho " +idade+ 'ano');
console.log(`Olá meu nome é ${nome} eu tenho ${idade} anos`)

// (2)- Declare uma string e utilize métodos para converter para maiúsculas e
//minúsculas

let string = 'zé rico e milhonario'
console.log(frases.toLowercase());
console.log(frases.toUpperCase());

// (3)- Declare uma variável e verifique se o tipo dela é number.

let numero = 15;
console.log(typeof numero);

// (4)- Calcule o Índice de Massa Corporal (IMC) utilizando variáveis para altura e
//peso

let altura = 1.86;
let peso = 70;
let IMC = (peso / (altura**altura))
console.log(IMC.toFixed(2))