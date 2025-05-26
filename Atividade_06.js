// Estrutura de repetição 

//01. Escreva um programa que peça ao usuário para digitar um número e, em seguida,
//imprima a tabuada desse número usando um loop while.

import rl from 'readline-sync'

let num = rl.questionInt("Informe o número para gerar a tabuada: ");
let cont = 1;
while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;
    
}

//02. Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de
//alunos.
//O Programa deverá:
//Ler o número de alunos da turma;
//Ler as notas dos 4 bimestres de cada aluno;
//Calcular e imprimir a média do aluno;
//Calcular e imprimir a média da turma.

let numAlunos = rl.questionInt("Informe o número de alunos da turma: ");

let contAlunos = 1;
let somaMedidas = 0;

while (contAlunos <- numAlunos){
    console.log(`Aluno ${contAlunos}`)

    let contBimestres = 1;
    let somaNotas = 0;

    while (contBimestres <- 4) {
        let nota = rl.question(`Informe a nota do ${contBimestres}° bimestre do LUNO ${contAlunos}: `)
        somaNotas += nota;
        contBimestres++;

    }

    let mediAluno = somaNotas / 4;
    somaMedidas +=mediaAluno;
    console.log(`Média do aluno ${contAlunos}: ${mediaAluno.toFixed(2)}`);
    contAlunos++;

}

let mediaGeralTurmas = somaMedidas / numAlunos;
console.log (`Média geral da turma : ${mediaGeralTurmas.toFixed(2)}`)


//03. a) Escreva um programa que simule um jogo de adivinhação
//onde o usuário deve adivinhar um número aleatório entre 1 e 100.
//O programa deve fornecer dicas sobre se o número digitado é
//maior ou menor que o número aleatório. O jogo deve continuar até
//que o usuário adivinhe corretamente.

const numeroAleatorio =Math.floor(Math.random()*100)+1;
let palpite;

do {
    palpite = rl.questionInt("Tente adivinhar o número (entre 1 e 100): ");
    if (palpite === numeroAleatorio) {
        console.log("Parabens ! você adivinhou o número.")
    } else if (palpite < numeroAleatorio){
        console.log("Tente um número maior.")
    } else {
        console,log("Tente número menor")
    } 

} while (palpite !== numeroAleatorio);

//02. Crie um algoritmo leia um nome e o salário bruto de 10 pessoas. Calcule e imprima o nome e o
//valor de imposto de renda a ser pago.
//Calcule o total de Imposto de Renda a ser pago conforme a tabela abaixo:
//Salário <= R$ 2.100,00 = isento
//Salário <= R$ 2.800,00 = 7,5%
//Salário <= R$ 3.750,00 = 15%
//Salário <= R$ 4.660,00 = 22.5%
//Salário > R$ 4.660,00 = 27.5%

let nome  = rl.question(`Informe o noem da ${i} pessoa: `)
let salario  = rl.question(`Informe o seu sálario de ${i} : `)
let impostodeRenda = 0;

if(salario <= 2100){
    impostodeRenda = 0;
}else if (salario  <= 2800) {
impostodeRenda = salario *0.075
} else if (salario = 3750) {
impostodeRenda = salario * 0.15;
}else if (salario = 4660) {
impostodeRenda = salario * 0.225;
}else if (salario > 4660) {
impostodeRenda = salario * 0.275
}

console.log(`\n---Imposto de renda a ser pago---`)
console.log(`Nome: ${nome} \n Imposto de renda: R$ ${impostodeRenda.toFixed(2)}\n`)

//questão 3

const pessoa ={
    nome: "Miguel",
    idade: 15,
    sexo: "Masculino"
}

for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`)
}

let cores = ["Azul", 'Branco', "Verde", "preto", "roxo"];
console,log