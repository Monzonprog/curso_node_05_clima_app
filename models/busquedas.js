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
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);

            return []; //Retornará las ciudades que coincidan
        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;
