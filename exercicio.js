var nome = prompt('Digite seu nome:')
var idade = prompt(nome + ' digite sua idade:')

var idadeDias = idade  * 365;
alert(nome + ' sua idade em dias é: ' + idadeDias)
var idade30anos = 30 * 365;
var idadeem30anos = idadeDias + idade30anos;
alert(nome + ' sua idade daqui 30 anos em dias é: ' + idadeem30anos)

var daqui40meses = idade * 12;
var continuacao40meses = (daqui40meses + 40) / 12;

if (continuacao40meses > 18 || continuacao40meses >= 16) {
    alert(nome + ' você podera votar daqui 40 meses')
} else{
    alert(nome + ' você não podera votar daqui 40 meses')
}