
// ... OR : ||  (alt gr + 6) ... // 

// il faut qu'une des propositions soit true --> true 

// 😃 😆 😁 - 🤔 😬

let userExperience = '😬';

userExperience === '😃' || userExperience === '😆' || userExperience === '😁'; 
// false || false || false  -->  false

// ATTENTION MAUVAISE SYNTAXE : 
userExperience === '😃' || '😆' || '😁';  
// false || true || true -->  true


// ... AND : && ... //

// il faut que toutes les propositions soient true --> true 

// deux checkbox
let member;
let newsLetter;

member.checked && newsLetter.checked;
// --> si une seule des deux est cochée --> false


