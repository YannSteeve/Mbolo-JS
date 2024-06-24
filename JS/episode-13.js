// Définie la réponse correcte à l'opération
let reponseCorrecte = 6; // 5 + 1
let reponse;

// Demande à l'utilisateur de donner la bonne réponse jusqu'à ce qu'il réussisse
do {
    reponse = parseInt(prompt("Combien font 5 + 1 ?"));
} while (reponse !== reponseCorrecte);

// Affiche un message de félicitations
alert("Bravo, c'est la bonne réponse !");
