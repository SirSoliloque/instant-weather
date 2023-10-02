// Éléments du DOM

// Interface
const barreRechercheCodePostal = document.getElementById("codePostalInput");
const boutonRechercheCodePostal = document.getElementById("recherche");
const listeDeroulanteVilles = document.getElementById("villeListe");

boutonRechercheCodePostal.addEventListener("click", onRechercher);
listeDeroulanteVilles.addEventListener("change", onSelectionneVille);

// Zones d'affichage
const zoneResultats = document.getElementById("resultat");
const labelVille = document.getElementById("WCVille");
const labelBref = document.getElementById("WCBref"); // décrit brièvement le temps (clair, nuageux...)
const labelTemperatureMin = document.getElementById("WCTemperatureMin");
const labelTemperatureMax = document.getElementById("WCTemperatureMax");
const labelPluie = document.getElementById("WCPluie"); // Probabilité de pluie
const labelEnsoleillement = document.getElementById("WCEnsoleillement"); // Nombres d'heures d'ensoleillement

let villes = [];

function onRechercher(){
    let codePostalS = barreRechercheCodePostal.value;

    let codePostalN = Number.parseInt(codePostalS);
    
    if(isNaN(codePostalN)){
        onErreurSaisieCodePostal("Le code postal contient des caractères non numériques.");
        return;
    }

    if(codePostalS.length != 5){
        onErreurSaisieCodePostal("Le code postal doit contenir 5 caractères.");
        return;
    }

    setVilles(codePostalN).then(listeVille);
}

function onErreurSaisieCodePostal(message){
    alert(message);
    listeDeroulanteVilles.classList.add("cache");
    zoneResultats.classList.add("cache");
}

function listeVille(){
    listeDeroulanteVilles.innerHTML = `<option value="placeholder">--Sélectionner une ville--</option>`;

    villes.forEach((ville) => {
        listeDeroulanteVilles.innerHTML += `\n<option value="${ville}">${ville}</option>`;
    });
    listeDeroulanteVilles.classList.remove("cache");
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

function onSelectionneVille(){
    let ville = listeDeroulanteVilles.value;

    if(ville === "placeholder"){
        return;
    }

    afficherMeteo("", ville);
}

function afficherMeteo(codeInsee, ville){
    //TODO appeler le code de Victor pour soliciter l'API de météo
    // Pour l'instant, on remplit avec des valeurs statiques pour tester
    
    labelVille.textContent = ville;
    labelBref.textContent = "ensoleillé";
    labelTemperatureMin.textContent = "15 °C";
    labelTemperatureMax.textContent = "29 °C";
    labelPluie.textContent = "2 %";
    labelEnsoleillement.textContent = "3 heures";

    zoneResultats.classList.remove("cache");
}

const getVilles = () => {
    return villes;
}