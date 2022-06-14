// Minha solução:

 function validarAprovacao(alunos, media) {
    let alunosAprovados = [];
    for (let i = 0; i < alunos.length; i++){
        if (alunos[i].nota >= media) {
            alunosAprovados.push(alunos[i]);
        }
    }
    return alunosAprovados;
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

console.log(alunosAprovados(listaDeAlunos, 6));



