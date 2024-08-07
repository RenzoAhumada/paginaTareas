import React from 'react';

const Tarea = ({ task, taskComplete, deleteTask, modifiTask }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded mb-2">
      <span
        className={`flex-1 ${task.completed ? 'line-through' : ''}`}
        onClick={() => taskComplete(task.id)}
      >
        {task.task}
      </span>
      <button
        className="ml-4 text-white bg-indigo-500 py-2 px-5 rounded hover:bg-indigo-600"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
      <button
        className="ml-4 text-white bg-indigo-500 py-2 px-5 rounded hover:bg-indigo-600"
        onClick={() => modifiTask(task.id)}
      >
        Modificar
      </button>
    </div>
  );
};

export default Tarea;

