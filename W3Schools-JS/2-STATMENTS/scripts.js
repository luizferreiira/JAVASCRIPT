document.getElementById('demo').innerHTML = "Hello, World!"; //Essa declaração diz ao browser para escrever "Hello, World!"


//declarando variáveis
let a, b, c;
a = 10;
b = 20;
c = a + 20;

//declarando constantes

const PI = 3.14159265358979323846;
//PI = PI + 10; //isso irá retornar um erro pois o valor de uma constante não pode ser alterada.

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota"; //você pode mudar um elemento dentro de um array constante.
console.log(cars);
//Palavras-chave no JavaScript que não podem ser usadas em nomes de variáveis
/* 
var - Declares a variable
let - Declares a block variable
const - Declares a block constant
if - Marks a block of statements to be executed on a condition
switch - Marks a block of statements to be executed in different cases
for - Marks a block of statements to be executed in a loop
function - Declares a function
return - Exits a function
try - Implements error handling to a block of statements 
*/



