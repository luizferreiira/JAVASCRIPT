const pessoa = {
    firstName: "Luiz",
    lastName: "Fernando",
    id: 5561,
    idade: 23,
    fullName: function(){ //método 
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
}

displayObject = document.getElementById('demo');

if(pessoa.idade >= 18){

    displayObject.innerHTML = `${pessoa.fullName()} você está autorizado a continuar no site...`;

}else{

    displayObject.innerHTML = `${pessoa.fullName()} você não está autorizado a continuar...`;

}