
//Criar um Map por array
const carros = ([
    ["BMW", 120.000],
    ["Civic", 80.000],
    ["Ônix", 45.000]

]);


/* Criar um Map adicionando valores com o método set()
O método set também pode ser usado para mudar um valor existente no Map */
const frutas = new Map();
frutas.set("Banana", 10);
frutas.set("Maçã", 20);
frutas.set("Goiaba", 30);


//Método get
let maca = frutas.get("Maçã");
document.getElementById('demo').innerHTML = maca; //retorna o valor da chave Maçã do Map


//Maps são um pouco parecidos com objetos JavaScript, tomar cuidado ao criar.