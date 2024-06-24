// Demande un nombre à l'utilisateur
let nombre = parseInt(prompt("Entrez un nombre :"));

// Initialise une chaîne pour stocker la table de multiplication
let table = "";

// Génère et ajoute chaque ligne de la table de multiplication
for (let i = 1; i <= 10; i++) {
    table += nombre + " x " + i + " = " + (nombre * i) + "\n";
}

// Affiche la table de multiplication
alert(table);
