
// ... if ()  else if ()  else ... //

let userAge = 21;

if (userAge < 18) {
    // instruction exécutée si ce qui est entre les parenthèses vaut true
    console.log('vous êtes mineur');
}
else {
    // instruction exécutée si ce qui est entre les parenthèses vaut false
    console.log('vous êtes majeur');
}


let weather = '☀️';
let message;

// il ne peut y avoir qu'une seule des instructions qui sera exécutée

if (weather === '☀️') {
    message = 'il fait beau';
}
else if (weather === '☁️') {
    message = 'il y a des nuages';
}
else if (weather === '⛈️') {
    message = 'il y a de l\'orage';
}
else if (weather === '❄️') {
    message = 'il neige';
}
else {
    message = 'je ne connais pas la météo';
}


// ... switch () ... //

// let weather = '☀️';
// let message;

switch (weather) {
    case '☀️' : message = 'il fait beau';
        break;
    case '☁️' : message = 'il y a des nuages';
        break;
    case '⛈️' : message = 'il y a de l\'orage';
        break;
    case '❄️' : message = 'il neige';
        break;
    default : message = 'je ne connais pas la météo';    
}