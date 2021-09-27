const Tarea = require('./tarea.class')
/*
_listado : {
    uuid-12345-67890-1: {id:1,desc:abc, completed:10/10/2021}
}
*/

class Tareas {

    _listado = {}

    get listadoArr (){
        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        return listado
    }
    constructor(){
        this._listado = {}
    }

    deleteTarea(id= ''){
        if(this._listado[id]){
            delete this._listado[id]
        }
    }

    cargarTareasFromArray(tareas = []){

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }
    crearTarea(desc = ''){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        console.log('\n')
        this.listadoArr.forEach( (tarea, i) =>{
            const idx = `${i+1}).`.blue
            const {desc, completed} = tarea;
            const estado = (completed) ? 'Completada'.green : 'Pendiente'.red

            console.log(`${idx} ${desc} :: ${estado}`);
        })
        console.log('\n')
    }
    

    listarTareas(completadas = true){
        console.log('\n')
        let contador = 1;
        this.listadoArr.filter( tarea =>{
            
            const {desc, completed} = tarea;
            const estado = (completed) ? 'Completada'.green : 'Pendiente'.red
            if (completadas) {
                if (completed) {
                    console.log(`${(contador + '.').green} ${desc} :: ${completed}`);
                    contador +=1
                }
            } else {
                if (!completed) {
                    console.log(`${(contador + '.').green} ${desc} :: ${estado}`);
                    contador +=1
                }
            }
            
        })
        console.log('\n')
    }
}

module.exports = Tareas