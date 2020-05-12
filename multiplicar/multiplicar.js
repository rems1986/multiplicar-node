// requires
const fs = require('fs');
const colors = require("colors");



let listarTabla = (base, limite=10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        resolve(data);
    });
}



let crearArchivo = (base, limite=10) => {

    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject('No es un número');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else{
                resolve(colors.green(`table-${base}.txt`));
            };
            console.log('El archivo fue creado');
        });
    });
}





module.exports = {
    crearArchivo,
    listarTabla
}
