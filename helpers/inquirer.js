require('colors');
const inquirer = require('inquirer')

const {menuSelecion} = require('./mensajes')
const menuOpts = require('./menuOpts')

const configQuestion = [{
    type: 'list',
    name: 'idSeleccion',
    message : '¿Que desea hacer?',
    choices : menuOpts
}]

const configQuestionPausa = [{
    type: 'input',
    name: 'opcion',
    message : `Precione ${'Enter'.green} para salir`
    
}]

const  inquirerMenu = async() => {

    //console.clear()
    menuSelecion()
    const {idSeleccion} = await inquirer.prompt(configQuestion)

    return idSeleccion

}


const  inquirerPausa = async() => {
   await inquirer.prompt(configQuestionPausa)
   console.log('\n');
}

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if (value .length === 0){
                    return 'Por favor ingrese un valor'.grey
                }
                return true
            }
        }
    ]

    const {desc} = await inquirer.prompt(question)
    return desc
}

const listadoTareasBorrar = async (tareas = []) => {

    const choices = tareas.map((tarea, id) => {
        const idx = `${id+1}.)`.green
        return {
            value : tarea.id,
            name : `${idx} ${tarea.desc}`
        }
    })
    const configQuestionDelete = [{
        type: 'list',
        name: 'idBorrar',
        message : '¿Que tarea desea borrar?',
        choices
    }]
    const {idBorrar} = await inquirer.prompt(configQuestionDelete)
    return idBorrar
}

module.exports = {
    inquirerMenu,
    inquirerPausa,
    leerInput,
    listadoTareasBorrar
}