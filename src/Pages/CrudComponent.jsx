import { useState } from 'react';
import DataTable from 'react-data-table-component';

import { Edit2, Trash2 } from 'lucide-react';

import { FuncionsCrud } from './FuncionsCrud';
import { DeleteGen } from './Delete';
import ModalGen from './ModalGen';
import FormModal from './FormModal';
import crudConfig from './CrudConfig';
import Swal from 'sweetalert2';
import { domain } from './URLS';

const CrudComponent = ({ title, href, url, columnsConfig, fetchEndpoint, deleteConfig, data }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: '',
    description: '',
    buttonLabel: '',
    isSuccess: false,
    ButtonLabelTrue2: false,
    ButtonLabell: '',
    onConfirm: () => { }
  });

  const [formDataToEdit, setFormDataToEdit] = useState(null);

  const handleDelete = (id) => {
    setModalInfo({
      title: deleteConfig.title,
      description: deleteConfig.description,
      buttonLabel: "Si",
      isSuccess: false,
      ButtonLabelTrue2: true,
      ButtonLabell: "Cancelar",
      onConfirm: () => confirmDelete(id)
    });
    setIsModalOpen(true);
  };

  const confirmDelete = (id) => {
    DeleteGen({
      url,
      ParametroId: id,
      NameDel: deleteConfig.itemName,
      setModalInfo,
      setIsModalOpen
    });
  };

  const [currentCrud, setCurrentCrud] = useState('Pacientes');

  const toggleModal = () => {
    setIsModalOpen1(true);
    setFormDataToEdit(null); // Para crear un nuevo elemento
  };

  const toggleModalForEdit = (row) => {
    setFormDataToEdit(row); // Pasa los datos de la fila al formulario de edición
    setIsModalOpen1(true);
  };

  const closeModal = () => setIsModalOpen1(false);

  const handleCreate = async (formData) => {
    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify(formData)
      };

      const response = await fetch(`${domain}${url}/`, requestOptions);

      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          title: "Creado Correctamente!",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      } else if (response.status >= 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...El proceso no fue completado",
        });
      }

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops..}",
      });
    }
  };

  const handleCEdit = async (formData) => {
    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let requestOptions = {
        method: "PUT",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify(formData)
      };

      const response = await fetch(`${domain}${url}/${formData.id}/`, requestOptions);

      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          title: "Editado Correctamente!",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      } else if (response.status >= 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...El proceso no fue completado",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops..}",
      });
    }
  };

  const columns = [
    {
      name: "ACCIONES",
      cell: (row) => <div className='flex gap-1 w-8'>
        <FuncionsCrud functionC={() => toggleModalForEdit(row)} icon={<Edit2 />} color={'#10454F'} />
        <FuncionsCrud functionC={() => handleDelete(row.id)} icon={<Trash2 />} color={'#ef4444'} />
      </div>
    },
    ...columnsConfig
  ];

  return (
    <main className="Dashboard">
      <div className="">
        <div className="pl-24 pr-4 md:pl-20 pt-5 md:pr-8 text-tertiary-200 h-screen">
          <div className='ml-4 flex w-full justify-between'>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={toggleModal}>Crear {title}</button>
          </div>
          <div className='m-4 mt-8'>
            <DataTable
              columns={columns}
              data={data}
              subHeader
              responsive
              fixedHeader
              pagination
              paginationServer
            />
          </div>
        </div>
        <ModalGen
          isOpen={isModalOpen}
          setOpen={setIsModalOpen}
          Title={modalInfo.title}
          Description={modalInfo.description}
          ButtonLabel={modalInfo.buttonLabel}
          isSuccess={modalInfo.isSuccess}
          ButtonLabelTrue2={modalInfo.ButtonLabelTrue2}
          ButtonLabell={modalInfo.ButtonLabell}
          onConfirm={modalInfo.onConfirm}
        />
        <FormModal
          isOpen={isModalOpen1}
          onClose={closeModal}
          crudType={currentCrud}
          config={crudConfig[currentCrud]}
          onSubmit={formDataToEdit ? handleCEdit : handleCreate} // Diferenciar entre crear y editar
          initialData={formDataToEdit} // Pasa los datos de la fila seleccionada
        />
      </div>
    </main>
  );
};

export default CrudComponent;