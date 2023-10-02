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

let villes_insee = new Map();

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

    villes_insee.forEach((ville, codeInsee) => {
        listeDeroulanteVilles.innerHTML += `\n<option value="${codeInsee}">${ville}</option>`
    });
    listeDeroulanteVilles.classList.remove("cache");
}

const setVilles = async codepostal => {
    return fetch("https://geo.api.gouv.fr/communes?codePostal="+codepostal)
    .then(res =>{
        if(!res.ok){
            throw new Error("erreur")
        }
        return res.json();
    })
    .then(data =>{
        villes_insee = new Map()
        for(i = 0; i < data.length; i++){
            villes_insee[i] = data[i].nom;
            villes_insee.set( data[i].code, data[i].nom)
        }
    })
}

function onSelectionneVille(){
    let codeInsee = listeDeroulanteVilles.value;

    if(codeInsee === "placeholder"){
        return;
    }

    afficherMeteo(codeInsee);
}

function afficherMeteo(codeInsee){
    //TODO appeler le code de Victor pour soliciter l'API de météo
    // Pour l'instant, on remplit avec des valeurs statiques pour tester
    
    labelVille.textContent = villes_insee.get(codeInsee);
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