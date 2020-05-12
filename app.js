const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')


let comando = argv._[0];

switch( comando ){
    case 'listar':
        listarTabla(argv.base, argv.limite).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
        break;

    default:
        console.log('comando no reconocido');
        break;
}


// let argv2 = process.argv;

// console.log('limite',argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1] ;



