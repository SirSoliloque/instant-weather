const barreRechercheCodePostal = document.getElementById("codePostalInput");
const boutonRechercheCodePostal = document.getElementById("recherche");

boutonRechercheCodePostal.addEventListener("click", onRechercher);

function onRechercher(){
    let valeurS = barreRechercheCodePostal.value;

    let valeurN = Number.parseInt(valeurS);
    console.log(valeurS.length);
    
    if(isNaN(valeurN)){
        onErreurDeSaisie("Le code postal contient des caractères non numériques.");
        return;
    }

    if(valeurS.length != 5){
        onErreurDeSaisie("Le code postal doit contenir 5 caractères.");
        return;
    }
}

function onErreurDeSaisie(message){
    alert(message);
}