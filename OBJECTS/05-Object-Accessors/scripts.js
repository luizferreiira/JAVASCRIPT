const pessoa = {
    firstName: "Luiz",
    lastName: "Fernando",
    age: 23,
    language: "pt-br",
    get lang(){
        return this.language;
    }
}

displayObject1 = document.getElementById('demo1');
displayObject1.innerHTML = pessoa.lang; //get lang



const car = {
    name: "BMW",
    year: 2022,
    color: "",
    set cor(cor){
        this.color = cor;
    }
}

pessoa.cor = "Preto"; //sett cor

displayObject2 = document.getElementById('demo2');
displayObject2.innerHTML = pessoa.cor;