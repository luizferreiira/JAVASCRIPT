
//CRIA UM CONSTRUTOR
function Pessoa(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye; 
}

//CRIA UM OBJETO PESSOA
const meuPai = new Pessoa("John", "Ferreira", 71, "Green");
const minhaMae = new Pessoa("Rose", "Ferreira", 50, "Brown");

//ADICIONA UMA NOVA PROPRIEDADE AO OBJETO "meuPai"
meuPai.Nacionalidade = "Brasileiro";

//ADICIONA UM MÉTODO AO OBJETO EXISTENTE "meuPai"

meuPai.nomeCompleto = function(){ //poderia fazer isso direto no construtor.
    return this.firstName + " " + this.lastName;
}


//EXIBE AS CARACTERÍSTICAS DO OBJETO "meuPai"
objectDisplay = document.getElementById('demo');

//objectDisplay.innerHTML = `My father name's: ${meuPai.nomeCompleto()}.`;

objectDisplay.innerHTML = `My father is ${meuPai.age} years old.
He have ${meuPai.eyeColor} eyes.
and my mother is ${minhaMae.age} years old.`;

