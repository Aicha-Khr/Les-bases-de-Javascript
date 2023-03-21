

// opérateur d'assignation : =
let myAge = 32;
myAge = 33;


// opérateurs arithmétiques 

//  +  -  *  /  ** (puissance)  % (modulo)

// NaN = mathématiquement pas valide
4 * 'des lettres'; // --> NaN



// % : modulo (reste d'une division)
// sert à vérifier qu'un nombre est multiple
let multipleOfTwo = 12 % 2;  // 0
let notMultipleOfTwo = 13 % 2; // 1



// il est possible de combiner les deux (assignation + opération mathématique)

let userMove = 10;

userMove =  userMove + 5; //  10 + 5 => 15
userMove += 5;  // 15 + 5 => 20

userMove *= 2; // 20 * 2 => 40


// incrémenter une valeur (ajouter 1)

let compteur = 0;

compteur = compteur + 1;  // 1
compteur += 1;  // 2
compteur++;  // 3


// décrémenter (enlever 1)

compteur--;  // compteur = compteur -1 => 2


// concaténation //

let userFirstName = 'Jon';
let userLastName = 'Doe';
let userAge = 34;

// 'Hello my name is Jon Doe and I'm 34 years old'
let presentation = 'Hello my name is ' + userFirstName + ' ' + userLastName + ' and I\'m ' + userAge + ' years old';

// template strings (alt gr + 7 => ``) //
presentation = `Hello my name is ${userFirstName} ${userLastName} and I'm ${userAge} years old`;


// concaténer chiffres et lettres
// dès que le symbole "+" est utilisé avec des chaînes de caractères, il ne sert plus qu'à concaténer

let birthday = 'Today, ' + userFirstName + ' is ' + userAge + 1; // --> 'Today, Jon is 341'
// le contenu de la variable userAge et le chiffre 1 sont transformés en type string

birthday = `Today ${userFirstName} is ${userAge + 1}`;