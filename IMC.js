var nome = prompt('Digite seu nome:')
var sexo = prompt( nome + 'digite seu genero:')
var altura = prompt(nome + ' digite sua altura:')
var peso = prompt(nome + ' digite seu peso:')

var imc = peso / (altura * altura);
alert(nome + ' seu IMC é de: ' + imc)

if(imc >= 30) {
    alert(nome + ' você esta acima do peso')
} else {
    alert(nome + ' você não esta acima do peso')
}