// Demande le montant d'une facture
let montant = parseFloat(prompt("Quel est le montant de la facture ?"));

// Applique une remise de 10% si le montant dépasse 40 000 F
if (montant > 40000) {
    montant = montant * 0.9; // appliquer une remise de 10%
}

// Affiche le total à payer
alert("Le total à payer est : " + montant);

