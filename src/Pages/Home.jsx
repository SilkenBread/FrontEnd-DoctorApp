import React from 'react'
import CrudPage from './CrudPage'
import crudConfig from './CrudConfig'

const Home = () => {
  return (
    <div>
    <CrudPage config={crudConfig.Pacientes} crudType="Pacientes" />
    <CrudPage config={crudConfig.Doctores} crudType="Doctores" />
    <CrudPage config={crudConfig.Citas} crudType="Citas" />
  </div>
  )
}

export default Home
