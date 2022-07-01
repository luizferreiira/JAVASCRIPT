function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`; 
}

const pessoa1 = {
    nome: "Luiz",
    idade: 23
};

const pessoa2 = {
    nome: "Julia",
    idade: 26
};

const pet = {
    nome: "Eros",
    idade: 3,
    raca: "Boxer"
};

console.log(calculaIdade.apply(pessoa2, [30]));
console.log(calculaIdade.call(pet, 5));

