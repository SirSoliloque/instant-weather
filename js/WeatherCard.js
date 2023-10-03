// Description: Classe WeatherCard
class WeatherCard{
    json;
    ville;
    prevision;
    constructor(CodeInsee) {
        this.CodeInsee = CodeInsee;
        this.json = null;
        this.ville = null;
        this.prevision = null;
    }

<<<<<<< HEAD
    async remplir() {
=======
    async remplir(jour) {
>>>>>>> d4c2a5017a25d771f0ee3379c37cfa00204bee75
        try {
            // Utilisez "await" pour attendre la réponse de la requête
            const response = await fetch(
                `https://api.meteo-concept.com/api/forecast/daily?token=${Token}&insee=${this.CodeInsee}`
            );
            if (!response.ok) {
                throw new Error(`Erreur de requête: ${response.status}`);
            }

            // Parsez la réponse en JSON
            const data = await response.json();
            this.json = data;
            this.ville = data.city;
            this.prevision = data.forecast;

            /**
            console.log(this.json);
            console.log(this.city);
            console.log(this.forecast);
            console.log(this.city.name);
            **/
        } catch (error) {
            console.error("Erreur lors de la récupération des données météo:", error);
        }
    }
    getjson(){
        return this.json;
    }
    Ville(){
        return this.ville["name"];
    }
<<<<<<< HEAD
    pourcentPluie(jour){
        return this.prevision[jour].probarain;
=======
    pourcentPluie(){
        return this.prevision.probarain;
>>>>>>> d4c2a5017a25d771f0ee3379c37cfa00204bee75
    }
    latitudeVille(){
        return this.ville.latitude;
    }
    longitudeVille(){
        return this.ville.longitude;
    }
<<<<<<< HEAD
    TempMin(jour){
        return this.prevision[jour].tmin;
    }
    TempMax(jour){
        return this.prevision[jour].tmax;
    }
    ensoleillement(jour){
        return this.prevision[jour].sun_hours;
    }

    meteo(jour){
        let weather=this.prevision[jour].weather;
=======
    TempMin(){
        return this.prevision.tmin;
    }
    TempMax(){
        return this.prevision.tmax;
    }
    ensoleillement(){
        return this.prevision.sun_hours;
    }

    meteo(){
        let weather=this.prevision.weather;
>>>>>>> d4c2a5017a25d771f0ee3379c37cfa00204bee75
        if (weather<0){
            return Error;
        }
        if (weather<=2){
            return "soleil";
        }
        if (weather<=5){
            return "nuage";
        }
        if (weather<=7){
            return "brume";
        }
        if (weather<=16){
            return "pluie";
        }
        if (weather<=32){
            return "neige";
        }
        if (weather<=48){
            return "pluie";
        }
        if (weather<=78){
            return "neige";
        }
        if (weather<=140){
            return "orage";
        }
        if (weather<=78){
            return "vent";
        }
        
        if (weather==235){
            return "grele";
        }
    }
}