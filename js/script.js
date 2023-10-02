const barreRechercheCodePostal = document.getElementById("codePostalInput");
const boutonRechercheCodePostal = document.getElementById("recherche");

let villes_insee = new Map();

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
            throw new Error("gofuckyourself")
        }
        return res.json();
    })
    .then(data =>{
        villes = [];
        for(i = 0; i < data.length; i++){
            villes[i] = data[i].nom;
            villes_insee.set( data[i].code, data[i].nom)
        }
    })
}

const getVilles = () => {
    return villes_insee;
}

setVilles(14100).then(() =>{
    console.log(getVilles())
});