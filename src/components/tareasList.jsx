import Tarea from './tarea';

const TareasList = ({ tareas, taskComplete, deleteTask, modifiTask }) => {
  return (
    <div className="space-y-4">
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          task={tarea}
          taskComplete={taskComplete}
          deleteTask={deleteTask}
          modifiTask={modifiTask}
        />
      ))}
    </div>
  );
};

export default TareasList;

