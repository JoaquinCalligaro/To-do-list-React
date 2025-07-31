// import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="gap-2 mb-4">
      <input
        className="border rounded p-2 flex-1 "
        type="text"
        placeholder="Escribi tu tarea..."
      />
      <button className="bg-blue text-white px-4 py-2 rounded hover:bg-blue-600 hover:text-blue-300 m-10">
        Agregar
      </button>
    </div>
  );
}

export default App;
