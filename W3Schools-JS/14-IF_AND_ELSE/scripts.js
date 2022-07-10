hour = new Date().getHours();

let greeting;

if(hour < 10){
    greeting = "Good morning!";
}else if(hour < 20){
    greeting = "Good day!";
}else{
    greeting = "Good evening!";
}

document.getElementById('demo').innerHTML = greeting;