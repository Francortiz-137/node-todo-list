import 'colors';

import {inquirerMenu, 
    pausa,
    leerInput} from './helpers/inquirer.js';
import {Tareas} from './models/tareas.js';
import {Tarea} from './models/tarea.js';
import {guardarDB} from './helpers/guardarArchivo.js';


const main = async() => {
    
    let opt = '';
    const tareas = new Tareas();
    do {
        //imprimir menu return opcion seleccionada
        opt = await inquirerMenu();
        
        switch(opt){
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                console.log(desc);
            break;

            case '2':
                console.log( tareas.listadoArr);
            break;
        }
        guardarDB( tareas.listadoArr);

        await pausa();
    } while ( opt !== '0');
}

main();

