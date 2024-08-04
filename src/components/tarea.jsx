import React from 'react'

const tarea = (task, taskComplete, deleteTask) => {
  return (
    <div>
        <span onClick={() => taskComplete(task.id)}>
        {tarea.task}</span>
        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={()=> deleteTask}>Eliminar</button>
    </div>

  )
}

export default tarea;