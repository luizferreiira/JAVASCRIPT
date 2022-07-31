
//cria um set por um array
const letras = (["a","b","c"]);

//Cria um set adicionando valores
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");


//Cria um set e adiciona valores a partir de variáveis
const a = "a";
const b = "b";
const c = "c";

const letters2 = new Set();

letters2.add(a);
letters2.add(b);
letters2.add(c);

//OBS: o Set aceita somente elementos únicos.

//Método forEach
let text = "";
let text2 = "";
let text3 = "";
letters.forEach(function(value){ //o forEach passa por cada elemento do set
    text += value + "<br>";
})

document.getElementById('demo').innerHTML = text;


//Método values()
let myIterator = letras.values();
for (const entry of myIterator){
    text2 += entry;
}

document.getElementById('demo2').innerHTML = text2;

//Método entries();
myIterator2 = letters.entries();

for (const entry of myIterator2){
    text3 += entry + "<br>";
}

document.getElementById('demo3').innerHTML = text3; //retorna chave e valor










