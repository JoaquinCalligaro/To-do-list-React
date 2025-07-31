//! 1. Importo React y useState
import { useState } from 'react';
import './App.css';
//! 2. Creo el componente principal
function App() {
  //! 3. Estado para el input (Lo que escribo)
  const [input, setInput] = useState('');

  //! 4. Estado para la lista de tareas (array de strings)
  const [tareas, setTareas] = useState<string[]>([]);
  //! Aqui se renderiza la UI (Toda la interfaz Grafica)
  return (
    <div className="gap-2 mb-4 ">
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded p-2 flex-1 "
          type="text"
          placeholder="Escribi tu tarea..."
        />
        <button
          onClick={() => {
            if (input.trim() !== '') {
              setTareas([...tareas, input]);
              setInput('');
            }
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:text-blue-600 ml-2">
          Agregar
        </button>
      </div>
      <div className="flex-col">
        <ul>
          {tareas.map((tarea, i) => (
            <li key={i} className=" border-b py-2">
              {tarea}{' '}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
