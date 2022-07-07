//indexOf()
//lastIndexOf()
//startsWith()
//endsWith

let str = "Please locate where \"locate\" occurs!";
let text = "The rain in SPAIN stays mainly in the plain";
console.log(str.indexOf("locate"));
console.log(str.lastIndexOf("locate"));

//nesses dois casos acima, se a palavra não existir dentro de str então retornará -1

console.log(str.search("locate"));
console.log(text.match(/ain/g)); //cria um array object com todos os "ain" encontrados na string
console.log(text.includes("plain")); //retorna true ou false

console.log(text.startsWith("Please")); //vai retornar falso pq a string não começa com essa palavra
console.log(text.endsWith("The")); //Retorna false pq a string não termina com The

