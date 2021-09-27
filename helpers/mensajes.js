require('colors')

const {outConsole} = require('./consoleColor')

const listMenu = [
    'Crear tareas',
    'Listar tareas',
    'Tareas completadas',
    'Tareas pendientes',
    'Completar tarea(s)',
    'Borrar Tareas'
]
const mostrarMenu = () => {

    return new Promise( resolve => {
        console.clear()
 
        outConsole({ text : "=========================", style:"red"})
        outConsole({ text : "  Seleccione una opcion  ", style:"custom"})    
        outConsole({ text : "=========================", style:"red"})

        listMenu.forEach( (tarea, index) => {
            outConsole({text : `${(++index)}. ${tarea}`})
        })
        outConsole({text : `0. Salir`})
        const readLine= require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readLine.question('Seleccione una opcion : ', (opt) => {
            console.log({opt})
            readLine.close()
            resolve(opt)
        })
    })
}

const pausa = () => {
    return new Promise (resolve =>{
        const readLine= require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question(`\nPresiona ${'Enter'.red} para continuar \n` , (opt) => {
            console.log({opt});
            readLine.close()
            resolve()
        })
    })
}
module.exports  = {
    mostrarMenu,
    pausa
}