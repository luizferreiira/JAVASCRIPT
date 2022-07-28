const car = {
    modelo: "BMW",
    cor: "Preto",
    ano: "2020"
};

car.placa = "TXH36S"; //Adiciona uma nova propriedade ao objeto
delete car.ano; //deleta uma propriedade

text = " ";
for(let x in car){
    text += car[x] + " ";
}

document.getElementById('demo').innerHTML = text;



//OBJETO ANINHADO
const myObj = {
    nome: "Luiz",
    idade: 23,
    cars: {
        car1: "BMW",
        car2: "Range Hover",
        car3: "Dodge Charger"
    }
}


document.getElementById('demo2').innerHTML = `O carro de ${myObj.nome} é o ${myObj.cars.car3}`;


x = " ";

const myObj2 = {
    nome: "John",
    idade: "25",
    cars: [
        {nome: "Ford", modelos: ["Fiesta","Focus","Mustang"]},
        {nome: "BMW", modelos: ["320","X3","X5"]},
        {nome: "Fiat", modelos: ["500","Panda"]}
    ]
}

for(let i in myObj2.cars){
    x += "<h2>" + myObj2.cars[i].nome + "</h2>";
    for(let j in myObj2.cars[i].modelos){
        x += myObj2.cars[i].modelos[j] + "<br>";
    }
}

document.getElementById('demo3').innerHTML = x;