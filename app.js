require('colors');

const {mostrarMenu, pausa} = require('./helpers/mensajes')


console.clear()

const main = async () => {

    console.log('Main Load')
    let opt = null
    do{
        opt = await mostrarMenu()
        if (opt !== '0') await pausa()
    } while(opt !== '0' )
    
}

main()