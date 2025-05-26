import rl from "readline-sync"

let frase = rl.question("Informe o texto para ser convertido: ");
//declaração de função
function Maiusculo(texto) {
    return texto.toUpperCase();
}
//expressão de função
const cxAlta = function(texto){
    return texto.toUpperCase()
}
//arrow function
const tudoMaiusculo = (texto) => texto.toUpperCase();
console.log(cxAlta(frase));