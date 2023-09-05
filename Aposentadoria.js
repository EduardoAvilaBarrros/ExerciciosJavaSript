var nome = prompt('Digite seu nome:')
var sexo = prompt( nome + 'digite seu genero:')
var idade = prompt( nome + 'digite seu idade:')
var contribuicao = prompt( nome + 'digite seu contribuicao:')

if(sexo = 'homem') {
    var conta = idade + contribuicao;
    if(conta >= 95) {
        alert(nome + ' você pode se aposentar')
    } else {
        alert(nome + ' você não pode se aposentar')
    }
} else {
    var conta = idade + contribuicao;
    if(conta >= 85) {
        alert(nome + ' você pode se aposentar')
    } else {
        alert(nome + ' você não pode se aposentar')
    }
}