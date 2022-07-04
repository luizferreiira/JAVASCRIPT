var currentNumberWrapper = document.getElementById('currentNumber');

var btnIncrement = document.getElementsByTagName('button')[1];

var btnDecrement = document.getElementsByTagName('button')[0];

btnIncrement.addEventListener('click',function(){
    increment();
});

btnDecrement.addEventListener('click',function(){
    decrement();
});


var currentNumber = 0;


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber >= 0){
        currentNumberWrapper.style.color = 'black';
    
    }

}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    
    }

}