import entradaDados from 'readline-sync';
let nome = entradaDados.question("Informe seu nome: ")
console.log (`Olá, ${nome}! `)

//(1). Solicite ao usuário para inserir um número representando um dia da
//semana (1 a 7) e mostre o nome do dia correspondente.

let numero = entradaDados.question("Digite um número que vai representar o dia da semana por exemplo segunda = 1 terça =2 etc...\n qual o número ?: ")

switch (numero){
    case '1':
        console.log(`Domingo`)
        break
    case '2':
        console.log(`Segunda-feira`)
        break
    case '3':
        console.log(`Terça-feira`)
        break
    case '4':
        console.log(`Quarta-feira`)
        break
    case '5':
        console.log(`Quinta-feira`)
        break
    case '6':
        console.log(`Sexta-feira`)
        break
    case '7':
        console.log(`Sabado`)
        break
    default:
            console.log("Valor incorreto! \nInforme o valor correto entre 1 a 7 por gentileza")
            break
}

//(2). Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome
//do mês.

let numeromes = entradaDados.question("Digite um número de 1 a 12 que vai representar um mes do ano, por exemplo 1 = janeiro 2 = fevereiro etc...\n qual o número ?: ")

switch (numeromes){
    case '1':
        console.log(`Janeiro`);
        break;
    case '2':
        console.log(`Fevereiro`);
        break;
    case '3':
        console.log(`março`);
        break;
    case '4':
        console.log(`Abril`);
        break;
    case '5':
        console.log(`Maio`);
        break;
    case '6':
        console.log(`Junho`);
        break;
    case '7':
        console.log(`Julho`);
        break;
    case '8':
        console.log(`Agosto`);
        break;
    case '9':
        console.log(`Setembro`);
        break;
    case '10':
        console.log(`Outubro`);
        break;
    case '11':
        console.log(`Novembro`);
        break;
    case '12':
        console.log(`Dezembro`);
        break;
    default:
            console.log("Valor incorreto! \nInforme o valor correto entre 1 a 12 por gentileza")
            break
}

//3. Implementar um programa que simule uma calculadora. O usuário deverá
//informar dois valores e a operação desejada.
//Com auxílio de um switch deve ser computado e mostrado o resultado da
//operação.

let n1 = entradaDados.question('Digite um primeiro número : ')
let n2 = entradaDados.question('Digite um segundo numero  : ')
let calculadora = entradaDados.question('Informe a operação desejada:\nAdição\nSubtração\nMultiplicação\nDivisão : ')

switch (op) {
    case 1 : 
        console.log(`${n1} + ${n2} = ${n1 + n2}`);
        break;
    case 2 : 
        console.log(`${n1} - ${n2} = ${n1 - n2}`);
        break;
    case 3 : 
        console.log(`${n1} * ${n2} = ${n1 * n2}`);
        break;
    case 4 : 
        console.log(`${n1} / ${n2} = ${n1 / n2}`);
        break;
    default:
        onsole.log("Opção invalida")
        break;
}

//Um funcionário irá receber um aumento de acordo com o seu
//categoria de bonificação (A,B,C e D).
//A tabela abaixo mostra o percentual de aumento de cada
//categoria:
//Faça um programa que leia a categoria de bonificação e o
//salário atual de um funcionário, em seguida calcule e
//imprima o seu novo salário. Use a instrução switch.

let salario = entradaDados.question('Qual o salario dele? : ')
let categoria = entradaDados.question('Qual a bonificação: ').toUpperCase();
let bonus = 0
switch (categoria){
    case 'A':
        bonus = salario * 0.05;
        console.log(`Novo salario ${salario+bonus.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}`)
        break;
    case 'B':
        bonus = salario * 0.10;
        console.log(`Novo salario ${salario+bonus.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}`)
        break;
    case 'C':
        bonus = salario * 0.15;
        console.log(`Novo salario ${salario+bonus.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}`)
        break;
    case 'D':
        bonus = salario * 0.10;
        console.log(`Novo salario ${salario+bonus.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}`)
        break;
    default:
        console.log("Categoria invalida")
        break;
}
