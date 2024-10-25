import React, { useState } from 'react';
import Logo from '../assets/logo.png';

const Sidebar = ({ setCurrentCrud }) => {  // Recibe la función para actualizar el CRUD seleccionado
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar si el sidebar está abierto o cerrado

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Cambiar el estado para abrir/cerrar el sidebar
  };

  return (
    <div className="flex h-screen">
      {/* Botón de menú para pantallas pequeñas */}
      <button 
        className="md:hidden p-4 bg-blue-400 text-white" 
        onClick={toggleSidebar}
      >
        Menu
      </button>

      {/* Sidebar */}
      <div 
        className={`bg-blue-400 h-screen w-52 flex flex-col p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static fixed top-0 left-0 z-50`}
      >
        <img src={Logo} alt="Logo" className="mb-4" />
        <button 
          onClick={() => setCurrentCrud('Pacientes')}  // Cambiar a CRUD de Pacientes
          className="w-full py-2 px-4 mb-2 text-white bg-blue-600 rounded hover:bg-blue-500"
        >
          Pacientes
        </button>
        <button 
          onClick={() => setCurrentCrud('Doctores')}  // Cambiar a CRUD de Doctores
          className="w-full py-2 px-4 mb-2 text-white bg-blue-600 rounded hover:bg-blue-500"
        >
          Doctores
        </button>
        <button 
          onClick={() => setCurrentCrud('Citas')}  // Cambiar a CRUD de Citas
          className="w-full py-2 px-4 text-white bg-blue-600 rounded hover:bg-blue-500"
        >
          Citas
        </button>
      </div>

      {/* Contenido principal */}
      
    </div>
  );
}

export default Sidebar;