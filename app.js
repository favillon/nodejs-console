const { inquirerMenu, inquirerPausa, leerInput, listadoTareasBorrar, confirmar, checkList} = require('./helpers/inquirer');
const { saveData, readDB } = require('./helpers/driveFile');
const Tareas = require('./models/tareas.class');

const main = async () => {

    console.log('Main Load')

    let opt = null
    const tareas = new Tareas()
    const tareasDB = readDB()

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB)
    }

    do{
        opt = await inquirerMenu()
        switch (opt) {
            case 1:
                const desc = await leerInput('Descripcion : ')
                tareas.crearTarea(desc)
                break;
            case 2:
                tareas.listadoCompleto()
                break;
            case 3:
                tareas.listarTareas()
                break;      
            case 4:
                tareas.listarTareas(false)
                break;
            case 5:
                const ids = await checkList(tareas.listadoArr)
                //console.log(ids);
                tareas.toogleCompleted(ids)
                break;
            case 6:
                const idDelete = await listadoTareasBorrar(tareas.listadoArr)
                
                if (idDelete !== 0 ) {
                    const ok = await confirmar ('¿Esta seguro?')
                    if (ok) {
                        tareas.deleteTarea(idDelete)
                        console.log(`Tareas borrada ${idDelete}`);
                    }
                }                
                break;
            default:
                break;
        }
        saveData( tareas.listadoArr )
        await inquirerPausa()
    } while(opt !== 0 )
    
}

main()