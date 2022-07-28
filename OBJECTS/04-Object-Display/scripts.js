const pessoa = {
    firstName: "Luiz",
    lastName: "Fernando",
    age: 23
}

displayObject = document.getElementById('demo1');
displayObject2 = document.getElementById('demo2');
displayObject3 = document.getElementById('demo3');
displayObject4 = document.getElementById('demo4');


let text = "";
for(let x in pessoa){
    text += pessoa[x] + " ";
}

const myArray = Object.values(pessoa);

let myString = JSON.stringify(pessoa);

displayObject.innerHTML = `${pessoa.firstName} ${pessoa.lastName} ${pessoa.age}`; //Exibe por string
displayObject2.innerHTML = text; //Exibe por loop
displayObject3.innerHTML = myArray; //exibe por Object.value();
displayObject4.innerHTML = myString; //exibe com JSON.stringify()




