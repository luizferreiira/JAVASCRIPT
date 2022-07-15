const letters = new Set(['a','b','c']);
let text = "";
let text2 = "";

document.getElementById('demo').innerHTML = "Número de elementos: " + letters.size;


const letters2 = new Set();
letters2.add('a');
letters2.add('b');
letters2.add('c');
letters2.add('d');

document.getElementById('demo2').innerHTML = "Número de elementos: " + letters2.size;


const a = 'a';
const b = 'b';
const c = 'c';
const d = 'd';
const e = 'e';

const letters3 = new Set();
letters3.add(a);
letters3.add(b);
letters3.add(c);
letters3.add(d);
letters3.add(e);

document.getElementById('demo3').innerHTML = "Número de elementos: " + letters3.size;


const teste = new Set(['a','b','c']);
teste.forEach(myFunction);
document.getElementById('demo4').innerHTML = text;

function myFunction(value){
    text += value + "<br>";
}

teste2 = new Set(['a','b','c','d']);


for(const x of teste2.values()){
    text2 += x + "<br>";
}

document.getElementById('demo5').innerHTML = text2;



