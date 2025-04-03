//Meu primeiro Olá Mudo em JS
//Var nome = "nome" é possivel redeclarar a mesma variavel
//const 'constante', não é alteravel o valor
//let 'Varriavel''Manipulavel'
// os tipos são (number,boolean,string)
//typeof para aber o valor da variavel 
//*Toda função tem parenteses, a propriedade não..
//arry como se foçe uma lista... => var estados = ["Rio de Janeiro", "São Paulo", "Bhaia"]; *Pode guarda valores mistos(number,strings,boleano)
//Para contar quantidade de elementos em um arry é ".length" depois o nome de arry
// lenguagens = ["JavaScript", "PHP", "Java"]
//undefined = 'uma propriedade indefina', que não recebeu um valor ou não foi declarada. *se ele fo imprimida ou usada VAI DAR ERRO!! possivel solução exemplo: ( let leve ='') 
//NaN para numbers, possivel solução exemplo(let num = 0;)
//console.log("Hello World!");

//(1) Escreva um programa que declare duas variáveis, “nome” e “idade”, e as
//imprima em um console em uma frase que diga “Olá, meu nome é [nome]
//e eu tenho [idade] anos”.

let nome = "Davi Valadão"
let idade = 15;
console.log("Olá meu nome é",nome,"e eu tenho ",idade, 'anos');

//(2) Declare uma string e utilize métodos para converter para maiúsculas e
//minúsculas

let string = 'zé rico e milhonario'
console.log(frases.toLowercase());
console.log(frases.toUpperCase());

//(3) Declare uma variável e verifique se o tipo dela é number.

let numero = 15;
console.log(typeof numero);

//(4) Calcule o Índice de Massa Corporal (IMC) utilizando variáveis para altura e
//peso

let altura = 1.86;
let peso = 70;
let IMC = (peso/ (altura**altura))
console.log(IMC.toFixed(2))