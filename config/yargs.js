const { option } = require('yargs');

const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                default: 10,
                describe: 'Limite de multiplo'
            })
            .check((argv,options) => {
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero';
                }
                return true;
            })
            .argv;

module.exports = argv;