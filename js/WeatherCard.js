// Description: Classe WeatherCard
class WeatherCard {
    json;
    ville;
    prevision;
    constructor(CodeInsee) {
        this.CodeInsee = CodeInsee;
        this.json = null;
        this.ville = null;
        this.prevision = null;
    }

    async remplir() {
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
            this.ville = this.json.city;
            this.prevision = this.json.forecast;
            console.log(this.json);
            /*
            console.log(this.ville);
            console.log(this.prevision);
            console.log(this.ville.name);
            */
            this.getjson();

        } catch (error) {
            console.error("Erreur lors de la récupération des données météo:", error);
        }
    }
    getprevision(jour) {
        let i = 0;
        while (i < 14 && i <= jour) {
            i++;
            }
        
        return this.prevision[Number(i)];
        console.error("day out of range");
    }
    getjson() {
        return this.json;
    }
    Ville() {
        return this.ville["name"];
    }
    pourcentPluie(jour) {
        return this.getprevision(jour).probarain;
    }
    latitudeVille() {
        return this.ville.latitude;
    }
    longitudeVille() {
        return this.ville.longitude;
    }
    TempMin(jour) {
        return this.getprevision(jour).tmin;
    }
    TempMax(jour) {
        return this.getprevision(jour).tmax;
    }
    ensoleillement(jour) {
        return this.getprevision(jour).sun_hours;
    }

    meteo(jour) {
        let weather = this.getprevision(jour).weather;
        if (weather < 0) {
            return Error;
        }
        if (weather <= 2) {
            return "soleil";
        }
        if (weather <= 5) {
            return "nuage";
        }
        if (weather <= 7) {
            return "brume";
        }
        if (weather <= 16) {
            return "pluie";
        }
        if (weather <= 32) {
            return "neige";
        }
        if (weather <= 48) {
            return "pluie";
        }
        if (weather <= 78) {
            return "neige";
        }
        if (weather <= 140) {
            return "orage";
        }
        if (weather <= 78) {
            return "vent";
        }

        if (weather == 235) {
            return "grele";
        }
    }
}