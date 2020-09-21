const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

completado = {
    //demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const optsCrear = {
    descripcion

}

const optsActualizar = {
    descripcion,
    completado

}

const optsBorrar = {
    descripcion

}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', optsCrear)
    .command('actualizar', 'Actualiza una tarea', optsActualizar)
    .command('borrar', 'Borra una tarea', optsBorrar)
    .help()
    .argv;

module.exports = {
    argv
}