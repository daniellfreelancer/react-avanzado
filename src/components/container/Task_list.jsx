import React from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/Task'


function TaskListComponent(props) {


    const defaultTask = new Task('Ejemplo', 'Descripcion por defecto', false, LEVELS.NORMAL)


    const chageState = (id) => {
        console.log("Cambiar estado de una task")
    }


  return (
    <div>

        <div>
            <h1>
                Tareas:
            </h1>
            {/* aqui el map del array */}

            <TaskComponent task={defaultTask} />
        </div>
      
    </div>
  )
}



export default TaskListComponent

