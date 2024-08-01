let objeto = {
    nome: 'João',
    idade: 30,
    endereco: 'Rua ABC, 123'
}

function soma(a, b) {
    return a + b
}

function multiplica(a, b) {
    return a * b
}

function imprimeNome(nome) {
    console.log(nome)
}

let resultado = soma(2, 3)
console.log(resultado)

imprimeNome(objeto.nome)

console.log(multiplica(2, 3))
console.log('Você corrigiu todos os erros!')