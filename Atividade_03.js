// (1) . Crie a variável apartamento e atribua a ela um objeto literal com as
//seguintes propriedades:
//▪quartos = 2
//▪ tipo = “apartamento”
//▪ endereco = “Avenida Principal, 456 - Centro”
//▪andar: 7
//Em seguida, exiba no console a seguinte frase, utilizando todas as
//propriedades da variável casa: "Apartamento com 2 quartos, localizado no 7º
//andar da Av. Principal, 456 - Centro.".

let apartamento = {
    quartos: 2,
    tipo: 'Apartamento',
    endereco: 'Avenida Principal, 456 - Centro',
    andar: 7

}

console.log (`Apartamento com ${apartamento.quartos}, localizado no ${apartamento.andar} andar da ${apartamento.endereco}.`)

// (2). Imagine que você está desenvolvendo um sistema para gerenciar produtos em
//um armazém. Crie uma variável chamada produtoEmbalado que execute as
//seguintes operações:
//Atribua um objeto literal à variável com as seguintes propriedades:
//▪ nome: "Laptop HP"
//▪ categoria: "Eletrônicos"
//▪ peso: 1.5
//▪ preco: 3500.00
//Exiba no console uma frase que utilize todas as propriedades do objeto, como o
//exemplo abaixo: "O produto Laptop HP, da categoria Eletrônicos, pesando 1.5 kg, está
//à venda por R$ 3500.00.“

let produtoEmbalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00,
}

console.log(`"O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso}, está
//à venda por R$ ${produtoEmbalado.preco.toLocaleString('pt-br', {style: 'currency',currency: 'BRL'})}.`);

//3. Crie uma classe chamada Imovel com os seguintes atributos:
//▪ quartos:
//▪ tipo:
//▪ endereco:
//Crie um método na classe chamado exibirInformacoes que
//retorna uma string com as informações do imóvel.
//Em seguida, instancie dois objetos da classe Imovel
//representando uma casa e um apartamento com as seguintes
//características:
//Casa:
//▪ Quartos: 4
//▪ Tipo: "Casa"
//▪ Endereço: "Rua da Amizade, 789 - Bairro Alegre"
//Apartamento:
//▪ Quartos: 2
//▪ Tipo: "Apartamento"
//▪ Endereço: "Avenida da Paz, 123 - Centro"
//Chame o método exibirInformacoes para cada instância e exiba o
//resultado no console.

class Imovel{
    constructor(quartos, tipo, endereco){
        this.quartos = quartos; 
        this.tipo = tipo;
        this.endereco = endereco
    } 
    exibirInformacoes(){
        return`${this.tipo} com ${this.quarto} quartos, localizados(a) na ${this.endereco}.`
    }
}

let casa = new Imovel(3, 'Sobrado', 'Rua das dores, bairro programador, n° 1010');
casa.quartos = 2;
casa.tipo = 'Sobrado';
casa.endereco = 'Centro';

console.log(casa);
console.log(`Quartos: ${casa.quartos}\n Tipo: ${casa.tipo}\n Endereço: ${casa.endereco}`)

let ap = new Imovel(2, 'Aprtamento', 'Rua da depressão, Bairro da solidão, n° 666');
console.log(ap.exibirInformacoes());
// console.log(casa) --> DA ERRADO!

//(4). Crie uma classe chamada Veiculo com os seguintes atributos:
//▪ marca
//▪ modelo
//▪ ano
//Crie um método na classe chamado exibirDetalhes que retorna
//uma string com as informações do veículo.
//Em seguida, instancie dois objetos da classe Veiculo
//representando um carro e uma motocicleta com as seguintes
//características:
//Carro:
//▪ Marca: "Toyota"
//▪ Modelo: "Corolla"
//▪ Ano: 2022
//Motocicleta:
//▪ Marca: "Honda"
//▪ Modelo: "CBR 600RR"
//▪ Ano: 2021
//Chame o método exibirDetalhes para cada instância e exiba o
//resultado no console.

class Viculo{
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    exibirDetalhes(){
        return`'${this.marca} do modelo ${this.modelo}, fabricado no ano ${this.ano}'`
    }
}

let carro = new Viculo('Audi', 'SUVs', 2025)
console.log(carro.exibirInformacoes)

let motocicleta = new Viculo('Ronda', 'cube', 2014)
console.log(motocicleta.exibirDetalhes)