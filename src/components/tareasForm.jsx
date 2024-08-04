import React from 'react'

const tareasForm = (addTareas) => {
    const[task, setTask] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(task.trim()){
            addTareas({
                id:Date.now(),
                task: task.trim(),
                completed: false,
            })
        };
        setTask('');
    }

  return (
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Tarea nueva
            </label>
            </div>
            <div className="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="inline-full-name" type="text" value={task} onChange={(e) => setTask(e.target.value)}
                placeholder="Ingrese nueva tarea"/>        
            </div>
        </div>
        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" type="submit">enviar</button>
        </form>
  )
}

export default tareasForm;
