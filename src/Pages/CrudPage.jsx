import React, { useState, useEffect } from 'react';
import { showDataNoToken } from './Fecth';
import CrudComponent from './CrudComponent';
import Sidebar from './Sidebar';
import FormModal from './FormModal';
import crudConfig from './CrudConfig';
 // Asegúrate de importar el crudConfig

const CrudPage = () => {
  const [data, setData] = useState(null); // Estado para almacenar los datos
  const [currentCrud, setCurrentCrud] = useState('Pacientes'); // Estado para la opción seleccionada
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  // Función para obtener los datos de la API de acuerdo al CRUD seleccionado
  const fetchData = async (url) => {
    try {
      const response = await showDataNoToken("GET", url);
      setData(response); // Almacenar los datos en el estado
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // Llamar a fetchData cuando cambie el CRUD seleccionado
  useEffect(() => {
    fetchData(crudConfig[currentCrud].url); // Actualizar los datos según la URL del CRUD actual
  }, [currentCrud]);



  return (
    <div className='w-full h-screen flex overflow-hidden'>
      <Sidebar setCurrentCrud={setCurrentCrud} /> {/* Pasar la función para cambiar el CRUD */}
      <div className='h-screen w-full flex justify-center items-center'>
        {data ? (
          <CrudComponent
            title={currentCrud}
            href={`/Crear${currentCrud}`} // Redirigir a la creación del CRUD correspondiente
            url={crudConfig[currentCrud].url}
            columnsConfig={crudConfig[currentCrud].columnsConfig}
            data={data}
            deleteConfig={{
              title: `¿Seguro que quieres eliminar ${currentCrud}?`,
              description: "Esta acción no se puede deshacer.",
              itemName: currentCrud
            }}
          />
        ) : (
          <p>Cargando datos...</p>
        )}
    
      </div>

  
    </div>
  );
}

export default CrudPage;