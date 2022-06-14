function trocarElementos(vetor) {
    if (!vetor) {
        return -1;
    }
    if (!vetor.length) {
        return -1;
    }
    for (i = 0; i < vetor.length; i++){
        if (vetor[i] % 2 == 0) {
            vetor[i] = 0;
        }
    }
    return vetor;
}

let vetor = [];
vetor = trocarElementos(vetor);
console.log(vetor);