const crudConfig = { 
    Pacientes: {
      columnsConfig: [
        { name: "ID", fetchName: "id", selector: row => row.id, sortable: true }, 
        { name: "Nombre Paciente", fetchName: "first_name", selector: row => row.first_name, sortable: true },
        { name: "Apellido", fetchName: "last_name", selector: row => row.last_name, sortable: true },
        { name: "Edad", fetchName: "age", selector: row => row.age, sortable: true },
        { name: "Fecha de nacimiento", fetchName: "date_of_birth", selector: row => row.date_of_birth, sortable: true },
        { name: "Teléfono", fetchName: "contact_number", selector: row => row.contact_number, sortable: true },
        { name: "Correo", fetchName: "email", selector: row => row.email, sortable: true },
        { name: "Dirección", fetchName: "address", selector: row => row.address, sortable: true },
        { name: "Historial", fetchName: "medical_history", selector: row => row.medical_history, sortable: true }
      ],
      url: `/api/patients`
    },
    Doctores: {
      columnsConfig: [
        { name: "ID", selector: row => row.id, sortable: true }, 
        { name: "Nombre Doctor", selector: row => row.first_name, sortable: true },
        { name: "Apellido", selector: row => row.last_name, sortable: true },
        { name: "Especialidad", selector: row => row.specialty, sortable: true },
        { name: "Teléfono", selector: row => row.contact_number, sortable: true },
        { name: "Correo", selector: row => row.email, sortable: true },
        { name: "Dirección", selector: row => row.address, sortable: true }
      ],
      url: `/api/doctors`
    },
    Citas: {
      columnsConfig: [
        { name: "ID", selector: row => row.id, sortable: true }, 
        { name: "Paciente", selector: row => row.patient_name, sortable: true },
        { name: "Doctor", selector: row => row.doctor_name, sortable: true },
        { name: "Fecha", selector: row => row.appointment_date, sortable: true },
        { name: "Hora", selector: row => row.appointment_time, sortable: true }
      ],
      url: `/api/appointments`
    }
  };
  
  export default crudConfig;