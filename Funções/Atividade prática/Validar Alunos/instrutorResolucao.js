// Resolução instrutor
function alunosAprovados(alunos, media) {
    let aprovados = [];
    for (let i = 0; i < alunos.length; i++){
        const { nota, nome } = alunos[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

let listaDeAlunos = [
    {
        nome: 'Dhionathan',
        nota: '10',
        turma: '1A',
    },
    {
        nome: 'stefani',
        nota: '9',
        turma: '2C',
    },
    {
        nome: 'Paulo',
        nota: '4',
        turma: '3D',
    },

];

console.log(validarAprovacao(listaDeAlunos, 6));



