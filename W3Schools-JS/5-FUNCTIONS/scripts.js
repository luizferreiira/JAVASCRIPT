

//Função sem retorno

function multiplicacao(a,b){
    let r = a * b;
    alert(`A multiplicação de ${a} * ${b} = ${r}`);
}

a = Number(prompt("Digite um número: ")); //precisa-se utilizar o object Number pois o prompt recebe uma string.
b = Number(prompt("Digite outro número: "));


multiplicacao(a, b); 



//Função com retorno

function soma(a,b){
    return a + b;
};

a = Number(prompt("Digite um número: "));
b = Number(prompt("Digite outro número: "));

alert(`A soma de ${a} + ${b} = ${soma(a,b)}`);






