import React from 'react';
import Tarea from './tarea';

const TareasList = ({ tareas, taskComplete, deleteTask }) => {
  return (
    <div className="space-y-4">
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          task={tarea}
          taskComplete={taskComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TareasList;

