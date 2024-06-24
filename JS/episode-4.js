// Demande les valeurs de deux variables
let a = prompt("Entrez la valeur de a :");
let b = prompt("Entrez la valeur de b :");

// Affiche les valeurs initiales
alert("" + a + "" + b);

// Permute les valeurs des variables
let temp = a;
a = b;
b = temp;

// Affiche les valeurs après permutation
alert("a = " + a + ", b = " + b);


