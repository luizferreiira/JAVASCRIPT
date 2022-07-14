
const cars = ["Volvo","BMW","Ferrari","Saab","Ford","Ônix"];
let text = "";


//Loop FOR
for(let i = 0; i < cars.length; i++){

    text += cars[i] + "<br>";

}

document.getElementById('demo').innerHTML = text;



//Loop For In

const person = {fname:"Luiz", lname:"Fernando", age:"23"}; //Object type

for(let x in person){ //pode ser usado em Array tbm
    text += person[x] + " " + " <br> ";
}

document.getElementById('demo').innerHTML = text;


//For each
const numbers = [10,20,30,40,50];

numbers.forEach(myFunction);

document.getElementById('demo').innerHTML = text;

function myFunction(value){

    text += value / 2 + " " + "<br>";

}



//Loop While

let i = 0;
while(i < 10){ // no Do while o código roda ao menos uma vez mesmo se condição for falsa pois o código roda antes do teste

    text += "O número é " + i + "<br>"
    i++;

}

document.getElementById('demo').innerHTML = text;