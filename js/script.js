const barreRechercheCodePostal = document.getElementById("codePostalInput");
const boutonRechercheCodePostal = document.getElementById("recherche");

let villes = [];

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

const setVilles = async codepostal => {
    return fetch("https://geo.api.gouv.fr/communes?codePostal="+codepostal)
    .then(res =>{
        if(!res.ok){
            throw new Error("An error has been made")
        }
        return res.json();
    })
    .then(data =>{
        villes = [];
        for(i = 0; i < data.length; i++){
            villes[i] = data[i].nom;
        }
    })
}

const getVilles = () => {
    return villes;
}