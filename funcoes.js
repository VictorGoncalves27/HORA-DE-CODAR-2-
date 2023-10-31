

function maior(){
    var numero1 = parseInt(prompt("Digite um numero"));
    var numero2 = parseInt(prompt("Digite outro numero"));

    if(numero1 > numero2){
        alert(numero1);   
    } else {
        alert(numero2);
    }
}


function P(){
 var valor  = parseInt(prompt("Digite um valor: ")); 

if (valor > 0){
   alert(" o  valor informado é positivo")
} else if (valor < 0){
alert("o valor informado é negativo")
} else {
   alert(" o  valor informado é neutro")
}
}

function maiorDeles(){

var numero1 = parseInt(prompt("digite um numero"));
var numero2 = parseInt(prompt("digite um segundo numero"));
var numero3 = parseInt(prompt("digite um terceiro numero"));

if(numero1 == numero2 && numero3 == numero2 ){
  alert("OS NUMEROS SÃO IGUAIS")
} else if ( numero1 > numero2 && numero1 > numero3 ){
  alert("numero1 é maior")
}else if ( numero2 > numero1 && numero2 > numero3 ){
  alert("numero2 é maior")
}else if ( numero3 > numero1 && numero3 > numero2 ){
  alert("numero3 é maior")
} 
}

function soma(){

var numero1 = parseInt(prompt("digite um numero"))
var numero2 = parseInt(prompt("digite um segundo numero"))
var numero3 = parseInt(prompt("digite um terceiro numero"))

if (numero1 == numero2 && numero3 == numero2){
    alert("os valores são iguais ")
}else if ( numero1 > numero2 && numero2 > numero3 ){
     alert( numero1 + numero2 && numero2+ numero1)

}else if ( numero2 > numero1 && numero3 > numero2 ){
    alert( numero2 + numero3 && numero3 + numero2 )
 
}else if ( numero3 > numero2 && numero1 > numero2 ){
    alert( numero3 + numero1 && numero1 + numero3)
 
}
}


function media(){

var numero1 = parseInt(prompt("digite um numero"));
var numero2 = parseInt(prompt("digite um segundo numero"));
var numero3 = parseInt(prompt("digite um terceiro numero"));
var numero4 = parseInt(prompt("digite um  quarto numero"));
var numero5 = parseInt(prompt("digite um quinto numero"));
var numero6 = parseInt(prompt("digite um sexto numero"));

alert(numero1+numero2+numero3+numero4+numero5+numero6/6)
alert(`${numero1},${numero2},${numero3},${numero4},${numero5},${numero6}`)

}



function pmu(){ 

var valor1 = parseInt(prompt("Digite o primeiro valor: "));
var valor2 = parseInt(prompt("Digite o segundo valor: "));
var valor3 = parseInt(prompt("Digite o terceiro valor: "));
var valor4 = parseInt(prompt("Digite o quarto valor: "));


var maior_valor = Math.max(valor1, valor2, valor3, valor4);
var menor_valor = Math.min(valor1, valor2, valor3, valor4);

alert(`Primeiro valor: ${valor1}`);
alert(`Último valor: ${valor4}`);
alert(`Maior valor entre eles: ${maior_valor}`);
alert(`Menor valor entre eles: ${menor_valor}`);

}




function inferior(){

var valor1 = parseInt(prompt("Digite o primeiro valor: "));
var valor2 = parseInt(prompt("Digite o segundo valor: "));
var valor3 = parseInt(prompt("Digite o terceiro valor: "));
var valor4 = parseInt(prompt("Digite o quarto valor: "));
var valor5 = parseInt(prompt("Digite o quinto valor: "));
var valor6 = parseInt(prompt("Digite o sexto valor: "));

var total = 0

if (valor1 < 72) {

   total = valor1 + total   // coloca total porque o valor depois que vai pra outro if não substitui o valor  
}
if (valor2 < 72) {
   total = valor2 + total
}
if (valor3 < 72) {
   total = valor3 + total
}
if (valor4 < 72) {
   total = valor4 + total
}
if (valor5 < 72) {
   total = valor5 + total
}
if (valor6 < 72) {  
   total = valor6 + total
}
alert(`A soma de todos eles são: ${total} `)
alert(`os valores digitados foram: ${valor1},${valor2},${valor3},${valor4},${valor5},${valor6}`);

}



function obterNumero() {
   let numero = parseFloat(prompt("Informe o valor da sua nota(entre 0 e 10): "));

   while (numero <= 0 || numero >= 11 || isNaN(numero)) {
       numero = parseFloat(prompt("O número deve ser maior que 0 e menor que 10. Tente novamente:"));
   }

   return numero;
}

function teste(){
let num1 = obterNumero();
let num2 = obterNumero();
let num3 = obterNumero();
let num4 = obterNumero();

let media = (num1 + num2 + num3 + num4) / 4;

if (media > 5) {
   alert("Parabéns!! Você passou no teste.");
} else {
   alert("você não passou no Teste.");
}

}



function votacao() {

   let ano = prompt('Informe seu ano de Nascimento');

   if (ano > 2005) {
       alert(' Você não é de Maior! Não pode Votar ');
   } else (ano < 2005); {
       alert(' Você é de Maior! Pode Vota ')
   }
}



function calcularPesoIdeal() {
    
    let altura = parseFloat(prompt('Informe seu altura '));
    let sexo = parseInt(prompt("Digite o código de sexo (1 para masculino, 2 para feminino): "))
   let PesoIdeal;

   if (sexo == '1') {
       PesoIdeal = 72.7 * altura - 58;
   } else if (sexo == '2') {
       PesoIdeal = 62.1 * altura - 44.7;
   } else {
       alert("Por favor informe um Genero ")
       return;

   }
   alert(`seu peso ideal é ${PesoIdeal.toFixed(1)}`);
}




function calculos() {
    
    let valor1 = parseInt(prompt('Digite um valor'));
    let valor2 = parseInt(prompt(('Digite outro valor valor')));
    let escolha = parseInt(prompt(('escolha as operações, 1- Adição, 2- Subtração, 3- Divisão, 4-Multiplicação ')));
   let resultado;

   if (escolha === 1) {
       resultado = valor1 + valor2
       alert(`o valor ${valor1} e o valor ${valor2} foram somados. O resultado da Soma é  ${resultado}`)

   } else if (escolha === 2) {
       resultado = valor1 - valor2
       alert(`o valor ${valor1} e o valor ${valor2} foram subtraidos. O resultado da subtração é  ${resultado}`)

   } else if (escolha === 3) {
       resultado = valor1 / valor2
       alert(`o valor ${valor1} e o valor ${valor2} foram divididos. O resultado da Divisão é  ${resultado}`)


   } else if (escolha === 4) {
       resultado = valor1 * valor2
       alert(`o valor ${valor1} e o valor ${valor2} foram Multiplicados. O resultado da multiplicação é  ${resultado}`)
   } else () => {
       alert('por favor escolha uma opção')
   }
}

