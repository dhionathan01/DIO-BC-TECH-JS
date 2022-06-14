function calcularIdade(anos) {
    return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos}`;
}

const pessoa = {
    nome: 'Dhionathan',
    idade: 21,
};

console.log(calcularIdade.call(pessoa, 30));