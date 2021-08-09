const fs = require('fs');
var colors = require('colors');

const crearArchivo = async (base = 12,listar = false,hasta = 10) =>{
    
    try {

        let salida = '',consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida   += `${base} ${ 'X' } ${ i } ${ '=' }  ${ base*i }\n`;
            consola  += `${base} ${ 'X'.green } ${ i } ${ '='.green }  ${ base*i }\n`;
        }

        fs.writeFileSync(`./salida/tabla-${ base}.txt`, salida);

        if(listar) console.log(consola);
        return `tabla-${ base}.txt`;

    } catch (error) {
       throw error; 
    }
   
}

module.exports = {
    crearArchivo
}