// funcao sem retorno

function imprimirSoma(a,b){
    console.log(a+b)
}

var c

var d = 15

c = 10

imprimirSoma(c,d)

//funcao com retorno
function soma(a,b=0){
    return a+b;
}

console.log(soma(2,3))
console.log(soma(2))