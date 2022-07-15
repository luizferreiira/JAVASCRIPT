const cars = new Map([
    ["BMW",90000],
    ["Saab", 80000],
    ["Ford", 50000]
]);

document.getElementById('demo').innerHTML = "Valor do veículo: " + cars.get("BMW");

const fruits = new Map();

fruits.set("Maçã", 10);
fruits.set("Banana", 5);
fruits.set("Laranja", 15);

document.getElementById('demo2').innerHTML = `Quantidade de frutas compradas: ${fruits.get("Maçã")} 
<br> Quantidade total de frutas disponiveis para comprar: ${fruits.size}`;

