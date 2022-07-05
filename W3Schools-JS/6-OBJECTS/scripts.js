//Um objeto é como se fosse uma variável porém é possível armazenar mais valores dentro dele.

const Pessoa = {
    firstName: "Luiz",
    lastName: "Fernando",
    age: 23,
    eyeColor: "Brown",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};


alert(`Seja bem-vindo ${Pessoa.fullName()}`);