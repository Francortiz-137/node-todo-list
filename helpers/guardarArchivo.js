import fs from 'fs';

export function guardarDB( data ) {

    const archivo = './db/data.json';

    fs.writeFileSync(archivo, JSON.stringify(data));
}