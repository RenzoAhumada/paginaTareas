import { useState } from 'react';
import TareasForm from './components/tareasForm';
import TareasList from './components/tareasList';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);

  const addTarea = (tarea) => {
    setTareas([tarea, ...tareas]);
  };

  const taskComplete = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
      )
    );
  };

  const deleteTask = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Tarea APP</h1>
      <TareasForm addTarea={addTarea} />
      <TareasList tareas={tareas} taskComplete={taskComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App;


