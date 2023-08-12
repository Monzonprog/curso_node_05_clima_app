const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        //TODO: leer DB si no existe
    }

    async ciudad(lugar = '') {
        try {
            //petición http
            //console.log('Ciudad:' , lugar);
            const resp = await axios.get(
                'https://api.mapbox.com/geocoding/v5/mapbox.places/toledo.json?language=es&limit=5&access_token=pk.eyJ1Ijoiam1vbnpvbm0iLCJhIjoiY2t0YnM1ajB4MXlvMTJ3bjlsZnBkZzdxdCJ9.C4ycOyJaGcnGDRnWl8zr_A'
            );
            console.log(resp.data);

            return []; //Retornará las ciudades que coincidan
        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;
