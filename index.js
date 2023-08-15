require('dotenv').config();

const {
    leerInput,
    inquirerMenu,
    pausa,
    listarLugares,
    climaLugar
} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {
    const busquedas = new Busquedas();
    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                //Buscar lugares
                const lugares = await busquedas.ciudad(termino);
                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find((l) => l.id == id);

                const temp = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

                //Clima

                //Mostrar resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre.green);
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ', lugarSel.lng);
                console.log('Temperatura: ', temp.temp);
                console.log('Mínima:', temp.min);
                console.log('Máxima:', temp.max);
                console.log('Como está el clima: ', temp.desc.green);
                break;

            case 2:
                break;
        }

        if (opt !== 0) await pausa();
    } while (opt !== 0);
};

main();
