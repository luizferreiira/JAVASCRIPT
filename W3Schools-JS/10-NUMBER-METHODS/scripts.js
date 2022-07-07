let x = 123;
let y = 3.14;

document.getElementById('demo').innerHTML = 
x.toString() + "<br/>"
+ (123).toString() + "<br/>"
+ (100 + 23).toString();

document.write(y.toExponential(3));

//toFixed()
//toPrecision()
//valueOf = se for um object number então irá retornar um primitive value


//Convertendo variáveis para números
Number("10");
Number("x");

parseInt("10 years old");
parseFloat("10.33 Reais");


/* propriedades do Method Number */

let n1 = Number.MAX_VALUE; 
let n2 = Number.MIN_VALUE;
//POSITIVE_INFINITY
//NEGATIVE_INFINITY
//NaN



