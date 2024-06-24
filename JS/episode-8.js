// Demande le nom et le sexe de l'utilisateur
let nom = prompt("Quel est votre nom ?");
let sexe = prompt("Quel est votre sexe ? (H/F)");

// Affiche un message en fonction du sexe
if (sexe.toUpperCase() === "H") {
    alert("Bonjour monsieur " + nom);
} else if (sexe.toUpperCase() === "F") {
    alert("Bonjour madame " + nom);
} else {
    alert("Sexe non reconnu");
}
