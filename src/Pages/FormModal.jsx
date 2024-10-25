import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const FormModal = ({ isOpen, onClose, crudType, config, onSubmit, initialData = {} }) => {
  // Asegura que initialData sea un objeto, incluso si es null o undefined
  const safeInitialData = initialData || {};

  // Inicializa formData utilizando los valores de initialData si están presentes
  const initialFormData = config.columnsConfig
    .filter(col => col.fetchName !== "id") // Asegúrate de que solo se incluyan los campos con fetchName
    .reduce((acc, col) => {
      acc[col.fetchName] = safeInitialData[col.fetchName] || ''; // Establece el valor inicial del campo o un string vacío
      return acc;
    }, {});

  const [formData, setFormData] = useState(initialFormData);

  // Efecto para actualizar formData cuando initialData cambie
  useEffect(() => {
    setFormData(
      config.columnsConfig.reduce((acc, col) => {
        acc[col.fetchName] = safeInitialData[col.fetchName] || ''; // Asegura valores predeterminados
        return acc;
      }, {})
    );
  }, [initialData, config]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Usa el nombre del input (fetchName) para actualizar formData
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formatear el campo de la fecha si existe
    if (formData.date_of_birth) {
      const date = new Date(formData.date_of_birth);
      const formattedDate = date.toISOString().split('T')[0]; // Formato YYYY-MM-DD
      formData.date_of_birth = formattedDate;
    }

    onSubmit(formData); // Envía el formData con fetchName correcto
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{crudType === 'create' ? `Crear ${crudType}` : `Editar ${crudType}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {config.columnsConfig.filter(col => col.fetchName !== "id").map((col, index) => (
            <Form.Group key={index} className="mb-3">
              <Form.Label>{col.name}</Form.Label>
              <Form.Control
                type="text"
                name={col.fetchName} // Usa fetchName como el nombre del input
                value={formData[col.fetchName] || ''} // Usa el valor actual de formData para el campo
                onChange={handleChange}
                required
              />
            </Form.Group>
          ))}
          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={onClose} className="me-2">
              Cancelar
            </Button>
            <Button type="submit" variant="primary">
              Guardar
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;