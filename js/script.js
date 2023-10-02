
let titre = document.getElementById("instantWeather")
let fond = document.getElementById("fond")
let recherche = document.getElementById("recherche")

recherche.addEventListener("click", ()=>{
    let typetemps = WeatherCard.weather()/*methode Victor*/
    if(typetemps = 'soleil'){
        fond.style.background = 'url("../image/theme_clair.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
    if(typetemps = 'neige'){
        fond.style.background = 'url("../image/theme_neigeux.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover' 
        titre.classList.add('sombre')
    }
    if(typetemps = 'nuage'){
        fond.style.background = 'url("../image/theme_nuageux.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
    if(typetemps = 'pluie'){
        fond.style.background = 'url("../image/theme_pluie.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
    if(typetemps = 'vent'){
        fond.style.background = 'url("../image/theme_vent.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
    if(typetemps = 'brume'){
        fond.style.background = 'url("../image/theme_brume.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
    if(typetemps = 'orage'){
        fond.style.background = 'url("../image/theme_orageux.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
    if(typetemps = 'grele'){
        fond.style.background = 'url("../image/theme_grele.jpg") no-repeat fixed'
        fond.style.backgroundSize = 'cover'
        titre.classList.add('sombre')
    }
})
