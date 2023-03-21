

// vérifier l'égalité : == ou ===

let userPassword = 'XXX';
let password = 'xxx';

// vérifier l'égalité en valeur : ==
userPassword == password;  // --> false

// vérifier l'égalité en valeur ET en type (stricte égalité) : ===
2 == "2"; // --> true
2 === "2";  // --> false


// vérifier l'inégalité : != (ne compare que les valeurs)
"2" != 2; // --> false
8 != 4;  // --> true


// vérifier l'inégalité stricte : !== (valeurs ET types)
4 !== 8; // --> true
8 !== 8; // --> false
8 !== '8'; // --> true


// <  >  <=  >=

