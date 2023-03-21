
// les variables servent à stocker des données

// créer une variable avec le mot-clé let
let userName;

// stocker une donnée dans une variable
userName = 'Philippe'; 

// réaliser les 2 étapes en même temps
let userPseudo = 'filip';

// mettre à jour une variable
userPseudo = 'filip92';


// ancien mot-clé pour créer une variable : var (déconseillé aujourd'hui)

// autre mot-clé pour créer une variable : const


// ... REGLES POUR NOMMER UNE VARIABLE ... //

/*

- pas d'espace
- ne commence pas par un chiffre
- seuls caractères autorisés : $ et _
- pas de mot réservé (mots-clés du langage javascript)


règles d'écriture si le nom de variable comporte plusieurs mots :
- camelCase : newUserPassword
- snake_case : new_user_password


le langage JavaScript est sensible à la casse :
    username différent de userName

*/


// ... TYPES DE DONNES STOCKEES DANS UNE VARIABLE ... //

// type string (chaîne de caractères) //

let str = 'single quote';
let str2 = "double quote";

// 'je m'appelle'
let echap = 'je m\'appelle';

// "mon nom est "Philippe" "
echap = "mon nom est \"Philippe\" "

let quoteMakeString = '1985'; // ce ne sont plus des chiffres mais une chaîne de caractères


// type number //
let numb = 10;
numb = 3 * 4 + 5; // 17
numb = 3 * (4 + 5);  // 27

let userHeight = 1.75;  // utiliser le point pour les décimales


// type booléen = true ou false //

let isUserLogged = true;   // sans guillemets

/*
en JavaScript, toute valeur vaut true

seules certaines valeurs valent false :

- false
- undefined
- 0
- Null
- "" (chaîne de caractères vide)
- NaN (Not a Number)

*/






// type object (stocker plusieurs données en même temps) //

// objet standart
let user = {
    firstName: 'Philippe',
    age: 35,
    developer: true
};

// tableau (array)
let dates = [1920, 1940, 1980, 2000];
let names = ['Jack', 'Samia'];
let everything = ['name', 54, false];


// type function (stocker des fonctionnalités) //


// type undefined //
/*
 une variable dans laquelle rien n'est stocké 
 sa valeur est donc indéfinie
*/


// type Null //



// commentaire sur une ligne

/*
commentaire 
sur 
plusieurs lignes
*/

// raccourci pour les commentaires => ctrl + :