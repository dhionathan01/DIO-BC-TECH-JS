// Minha solução;
function verificaPolindromo(palavra) {
    if (!palavra) { // Verifica se a variável palavra é diferente de verdadeira, seja undefined, null ou 0;
        return;
    }
    let polindromo = palavra.split("");
    polindromo = polindromo.reverse();
    polindromo = polindromo.join("");
    if (palavra == polindromo) {
        return true;
    } else {
        return false;
    }
}

function verificaPolindromo2(palavra) {
    if (!palavra)return;
    
    for (let i = 0; i < palavra.length / 2; i++){
        if (palavra[i] === palavra[palavra.length - 1 - i]) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(verificaPolindromo('ama'));

console.log(verificaPolindromo2('ama'));