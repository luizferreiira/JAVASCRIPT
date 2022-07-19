

//refers to the object
const person = {
    firstName: "Luiz",
    lastName: "Ferreira",
    id: 5521,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById('demo').innerHTML = person.fullName();


