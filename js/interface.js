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
        zoneResultats.classList.add("cache");
        return;
    }

    const weatherCard = new WeatherCard(codeInsee);
    weatherCard.remplir(0).then(() =>{
        afficherMeteo(weatherCard);
    })
}

function afficherMeteo(weatherCard){
    labelVille.textContent = weatherCard.Ville();
    
<<<<<<< HEAD
    labelBref.textContent = " :" + weatherCard.meteo(0);
=======
    labelBref.textContent = "Temps :" + weatherCard.meteo();
>>>>>>> d4c2a5017a25d771f0ee3379c37cfa00204bee75
    
    labelTemperatureMin.textContent = `${weatherCard.TempMin(0)} °C`;
    labelTemperatureMax.textContent = `${weatherCard.TempMax(0)} °C`;

<<<<<<< HEAD
    labelPluie.textContent = weatherCard.pourcentPluie(0) + "%";
    
    labelEnsoleillement.textContent =  `${weatherCard.ensoleillement(0)} heures`;
=======
    labelPluie.textContent = weatherCard.pourcentPluie() + "%";
    
    labelEnsoleillement.textContent =  `${weatherCard.ensoleillement()} heures`;
>>>>>>> d4c2a5017a25d771f0ee3379c37cfa00204bee75

    actualiserArrierePlan(weatherCard);

    zoneResultats.classList.remove("cache");
}

const getVilles = () => {
    return villes;
}