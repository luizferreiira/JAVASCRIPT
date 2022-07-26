const pessoa = {firstName: "Luiz", lastName: "Fernando", age: "23", eyeColor: "Brown"}; //propriedade: "valor"

const pessoa2 = {
    firstName: "John",
    lastName: "Smith",
    age: "30",
    eyeColor: "Green"
};


//Cria um objeto vazio e adiciona as propriedades uma a uma

const car = {}; //poderia usar o new tbm, mas não é muito aconselhável
car.modelo = "BMW";
car.ano = 2018;
car.cor = "preto";

exibirObjeto = document.getElementById('demo');

exibirObjeto.innerHTML = car.modelo;

document.write(pessoa.firstName);




