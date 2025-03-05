// Event listener lors du click sur le bouton id Inscription
document.getElementById("inscription").addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du bouton "submit"
    inscrireUtilisateur(); // Appelle la méthode
});

// Fonction appelée
function inscrireUtilisateur() {
    // champs
    var field = document.getElementById("validationForm");
    var prenom = document.getElementById("prenom");
    var nom = document.getElementById("nom");
    var email = document.getElementById("email");
    field.textContent = '';
    field.style.color = "#df5353";

    // verifier si les champs sont non vides. Afficher un message d'erreur.
    if (nom.value == '') {
        field.textContent += "Veuillez entrer un nom."
    } 
    if (prenom.value == '') {
        field.textContent += "Veuillez entrer un prenom."
    }   
    if (email.value == '') {
        field.textContent += "Veuillez entrer un email."
    }

    // Si pas de message d'erreur notifié, mettre un message de remerciement pour l'inscription.
    if (field.textContent == '') {
        if (prenom.value && nom.value && email.value) {
            field.style.color = "#548b3c";
            field.textContent = "Merci pour votre inscription " + prenom.value + ". Hâte de vous retrouver !";
            // vider les champs.
            prenom.value = "";
            nom.value = "";
            email.value = "";
        } else {
            field.value = "";
        }
    }
}
