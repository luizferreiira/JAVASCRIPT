const cars = [
    "Volvo",
    "BMW",
    "Ferrari"
];

document.getElementById('demo').innerHTML = cars;

const Usuarios = new Array(
    "Luiz",
    "Maria",
    "Marcelo",
    "João"
);

document.getElementById('demo2').innerHTML = Usuarios;

alert(`Seja bem-vindo: ${Usuarios[0]}`); // Luiz está no índice 0 pois a contagem dos índices sempre começa por zero

Usuarios[1] = "Antonio"; //mudou o elemento no índice 1 de Maria para Antonio

document.write(Usuarios); 