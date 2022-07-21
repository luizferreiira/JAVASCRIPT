class Car{
    constructor(nome, year){
        this.year = year;
        this.nome = nome;
    }

    age(){ //também é possível fazer isso com passagem de parametros
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

text = document.getElementById('demo');
let myCar = new Car("BMW",2020);

text.innerHTML = `My car is ${myCar.age()} years old.`;

