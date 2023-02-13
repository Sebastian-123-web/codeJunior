import React from 'react'
import './PerfilMainCompany.css'

export default function PerfilMainCompany(props) {
  return (
    <div className='main-company'>
      <section className='main-company_description'>
        <h1>Description</h1>
        <p>{props.descripcionEmpresa}</p>
      </section>
    </div>
  )
}
