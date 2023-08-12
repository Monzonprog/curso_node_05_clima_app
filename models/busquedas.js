const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        //TODO: leer DB si no existe
    }

    get paramsMapbox (){
        return {
            access_token:
                'pk.eyJ1Ijoiam1vbnpvbm0iLCJhIjoiY2t0YnM1ajB4MXlvMTJ3bjlsZnBkZzdxdCJ9.C4ycOyJaGcnGDRnWl8zr_A',
            language: 'es',
            limit: 5,
        };
    }

    async ciudad(lugar = '') {
        try {
            //petición http

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox,
            });

            const resp = await instance.get();

            console.log(resp.data);

            return []; //Retornará las ciudades que coincidan
        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;
