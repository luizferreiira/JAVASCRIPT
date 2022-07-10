Math.random();

n1 = Math.floor(Math.random()*100);

//document.write(n1);

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

document.getElementById('demo').innerHTML = getRndInteger(1,100);




