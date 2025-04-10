// (1)- Crie um programa que declare duas variáveis e exiba o resultado da soma,
//subtração, multiplicação e divisão desses números.

let valor1 = 10
let valor2 = 5
let soma = valor1 + valor2
let subtração = valor1 - valor2
let divisao = valor1 / valor2
console.log(`Segundo os valores de ${valor1} com ${valor2} a soma é ${soma} a subtração é ${subtração} e a divisão é ${divisao}`)

// (2)- Declare duas idades e utilize operadores de comparação para verificar se uma
//pessoa é mais velha que a outra.

let idade1 = 15
let idade2 = 17
let idades = idade1 == idade2 ? "Sim, eles tem a mesma idade" : "Não, eles tem idades diferentes"
console.log(idades)

// (3)- Crie uma variável idade com um número e use o operador ternário para verificar
//se o valor armazenado na variável é maior ou igual a 18. Imprima “Maior de
//idade” ou “Menor de idade”.

let n1 = 20
let verificar = n1 <= 18  ? "Menor de idade" : "Maior de idade"
console.log(verificar)

// (4)- Crie uma variável com um número e use o operador ternário para verificar se é
//par ou ímpar.

let valo = 16
let vereficação = valo % 2 == 0 ? "Par" : "Impar"
console.log (vereficação)