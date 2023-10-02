// Description: Classe WeatherCard
class WeatherCard{
    json;
    city;
    forecast;
    constructor(CodeInsee) {
        this.CodeInsee = CodeInsee;
        this.json = null;
        this.city = null;
        this.forecast = null;
    }

    async fetchData() {
        try {
            // Utilisez "await" pour attendre la réponse de la requête
            const response = await fetch(
                `https://api.meteo-concept.com/api/forecast/daily/0?token=${Token}&insee=${this.CodeInsee}`
            );
            if (!response.ok) {
                throw new Error(`Erreur de requête: ${response.status}`);
            }

            // Parsez la réponse en JSON
            const data = await response.json();
            this.json = data;
            this.city = data.city;
            this.forecast = data.forecast;

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
        return this.city["name"];
    }
    latitudeVille(){
        return this.city.latitude;
    }
    longitudeVille(){
        return this.city.longitude;
    }
    TempMin(){
        return this.forecast.tmin;
    }
    TempMax(){
        return this.forecast.tmax;
    }
    Sunhour(){
        return this.forecast.sun_hours;
    }

    determineWeather(){
        let weather=this.forecast.weather;
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