// Demande la moyenne d'un élève
let moyenne = parseFloat(prompt("Quelle est la moyenne de l'élève ?"));

// Affiche la mention en fonction de la moyenne
if (moyenne >= 0 && moyenne < 10) {
    alert("Passable");
} else if (moyenne >= 10 && moyenne < 12) {
    alert("Assez-Bien");
} else if (moyenne >= 12 && moyenne < 14) {
    alert("Bien");
} else if (moyenne >= 14 && moyenne < 16) {
    alert("Très bien");
} else if (moyenne >= 16 && moyenne <= 20) {
    alert("Excellent");
} else {
    alert("Moyenne non valide");
}
