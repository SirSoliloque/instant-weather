let titre = document.getElementById("instantWeather")
let fond = document.getElementById("fond")


function actualiserArrierePlan(weatherCard){
    let typetemps = weatherCard.determineWeather()//methode Victor

    // Pour tester l'affichage d'un certain thème:
    //let typetemps = "orage";

    console.log(typetemps);
    if(typetemps == 'soleil'){
        fond.style.background = 'url("./image/theme_clair.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
        document.getElementById("soleil").style.display = "block"
        document.getElementById("nuage").style.display = "none"
        document.getElementById("neige").style.display = "none"
        document.getElementById("pluie").style.display = "none"
        document.getElementById("brume").style.display = "none"
        document.getElementById("vent").style.display = "none"
        document.getElementById("orage").style.display = "none"
        document.getElementById("grele").style.display = "none"
    }
    else if(typetemps == 'neige'){
        fond.style.background = 'url("./image/theme_neigeux.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover' 
        titre.classList.add('sombre')
        document.getElementById("neige").style.display = "block"
        document.getElementById("nuage").style.display = "none"
        document.getElementById("pluie").style.display = "none"
        document.getElementById("soleil").style.display = "none"
        document.getElementById("brume").style.display = "none"
        document.getElementById("vent").style.display = "none"
        document.getElementById("orage").style.display = "none"
        document.getElementById("grele").style.display = "none"
    }
    else if(typetemps == 'nuage'){
        fond.style.background = 'url("./image/theme_nuageux.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
        document.getElementById("nuage").style.display = "block"
        document.getElementById("pluie").style.display = "none"
        document.getElementById("neige").style.display = "none"
        document.getElementById("soleil").style.display = "none"
        document.getElementById("brume").style.display = "none"
        document.getElementById("vent").style.display = "none"
        document.getElementById("orage").style.display = "none"
        document.getElementById("grele").style.display = "none"
    }
    else if(typetemps == 'pluie'){
        fond.style.background = 'url("./image/theme_pluie.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
        document.getElementById("pluie").style.display = "block"
        document.getElementById("nuage").style.display = "none"
        document.getElementById("neige").style.display = "none"
        document.getElementById("soleil").style.display = "none"
        document.getElementById("brume").style.display = "none"
        document.getElementById("vent").style.display = "none"
        document.getElementById("orage").style.display = "none"
        document.getElementById("grele").style.display = "none"
    }
    else if(typetemps == 'vent'){
        fond.style.background = 'url("./image/theme_vent.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
        document.getElementById("vent").style.display = "block"
        document.getElementById("nuage").style.display = "none"
        document.getElementById("neige").style.display = "none"
        document.getElementById("soleil").style.display = "none"
        document.getElementById("brume").style.display = "none"
        document.getElementById("pluie").style.display = "none"
        document.getElementById("orage").style.display = "none"
        document.getElementById("grele").style.display = "none"
    }
    else if(typetemps == 'brume'){
        fond.style.background = 'url("./image/theme_brumeux.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
        document.getElementById("brume").style.display = "block"
        document.getElementById("nuage").style.display = "none"
        document.getElementById("neige").style.display = "none"
        document.getElementById("soleil").style.display = "none"
        document.getElementById("pluie").style.display = "none"
        document.getElementById("vent").style.display = "none"
        document.getElementById("orage").style.display = "none"
        document.getElementById("grele").style.display = "none"
    }
    else if(typetemps == 'grele'){
        fond.style.background = 'url("./image/theme_grele.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
        document.getElementById("grele").style.display = "block"
        document.getElementById("nuage").style.display = "none"
        document.getElementById("neige").style.display = "none"
        document.getElementById("soleil").style.display = "none"
        document.getElementById("brume").style.display = "none"
        document.getElementById("vent").style.display = "none"
        document.getElementById("orage").style.display = "none"
        document.getElementById("pluie").style.display = "none"
    }
    else if(typetemps == 'orage'){
        fond.style.background = 'url("./image/theme_orageux.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
        document.getElementById("orage").style.display = "block"
        document.getElementById("nuage").style.display = "none"
        document.getElementById("neige").style.display = "none"
        document.getElementById("soleil").style.display = "none"
        document.getElementById("brume").style.display = "none"
        document.getElementById("vent").style.display = "none"
        document.getElementById("pluie").style.display = "none"
        document.getElementById("grele").style.display = "none"
    }
}