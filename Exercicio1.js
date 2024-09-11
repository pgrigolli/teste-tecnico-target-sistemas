// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function find_in_Fibo(num) {

    let count = 0
    let init = 1


    while(count < num){
        count += init
        init += count

        if(count == num || init == num){
            return "O número " + num + " pertence à sequência de Fibonacci."
        }
    }

    return "O número " + num + " não pertence à sequência de Fibonacci."

    
    
}
