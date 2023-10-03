let titre = document.getElementById("instantWeather")
let fond = document.getElementById("fond")

function actualiserArrierePlan(weatherCard){
    let typetemps = weatherCard.meteo()//methode Victor
    console.log(typetemps);
    if(typetemps == 'soleil'){
        fond.style.background = 'url("../image/theme_clair.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
    else if(typetemps == 'neige'){
        fond.style.background = 'url("../image/theme_neigeux.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover' 
        titre.classList.add('sombre')
    }
    else if(typetemps == 'nuage'){
        fond.style.background = 'url("../image/theme_nuageux.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
    else if(typetemps == 'pluie'){
        fond.style.background = 'url("../image/theme_pluie.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
    else if(typetemps == 'vent'){
        fond.style.background = 'url("../image/theme_vent.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
    else if(typetemps == 'brume'){
        fond.style.background = 'url("../image/theme_brume.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
    else if(typetemps == 'grele'){
        fond.style.background = 'url("../image/theme_grele.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
    else if(typetemps == 'orage'){
        fond.style.background = 'url("../image/theme_orageux.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
}