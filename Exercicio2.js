// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre. 

// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 

function find_many_a(string){

    string.array

    let count = 0;
    for (let i = 0; i < string.length; i++)
        if(string[i] == 'a' || string[i] == 'A' || string[i] == 'á' || string[i] == 'ã' || string[i] == 'â' || string[i] == 'à') count++
    
    if(count == 0) return "A palavra não possui nenhuma letra 'a'."
    else {
        return "A palavra possui " + count + " letras 'a'"
    }
}
