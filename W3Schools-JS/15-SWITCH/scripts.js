let day;
switch(new Date().getDay()){

    default:
        day = "Ansioso para o fim de semana."
        break;
    case 0:
        day = "Domingo";
        break;
    case 1:
        day = "Segunda-feira";
        break;
    case 2:
        day = "Terça-feira";
        break;
    case 3:
        day = "Quarta-feira";
        break;
    case 4:
        day = "Quinta-feira";
        break;
    case 5:
        day = "Sexta-feira";
        break;
    case 6:
        day = "Sábado";
  
}

document.getElementById('demo').innerHTML = `Hoje é ${day}.`;