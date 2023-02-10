import React, { useState } from "react";
import "./EmpForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye} from "@fortawesome/free-solid-svg-icons";


export default function EmpForm() {
 const [formData, setFormData] = useState({
   name: "",
   positionInTheCompany: "",
   email: "",
   nameOfCompany: "",
   fiscalCondition: "",
   documentNumber: "",
   address: "",
   //  lado derecho
   surname: "",
   phone: "",
   password: "",
   businessName: "",
   companyPhone:"",
   quantityOfEmployees:"",
 });
const [showPassword, setShowPassword] = useState(false);

 const handleChange = (e) => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value,
   });
 };

 const handleSubmit = (e) => {
  //  e.preventDefault();
   // Aquí se pouede enviar los datos del formulario a una API o base de datos
   alert("El formulario se envio");
 };

  return (
    <>
      <main>
        <section className="tarjeta12">
          <h2> Registro de Empresa</h2>

          <form className="devform" onSubmit={handleSubmit}>
            <div className="left_Emp">
              <div className="a_Emp">
                <input
                  placeholder="Nombres"
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="a_Emp width_select">
                <select
                  name="positionInTheCompany"
                  value={formData.positionInTheCompany}
                  onChange={handleChange}
                >
                  <option value="">Cargo</option>
                  <option value="Lima">Gerente</option>
                  <option value="Miraflores">RR.HH</option>
                </select>
              </div>
              <div className="a_Emp">
                <input
                  placeholder="E-mail"
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="a_Emp">
                <input
                  placeholder="Nombre de la Empresa"
                  required
                  type="text"
                  id="nameOfCompany"
                  name="nameOfCompany"
                  value={formData.nameOfCompany}
                  onChange={handleChange}
                />
              </div>

              <div className="doc_Em a_Emp">
                <select
                  name="fiscalCondition"
                  value={formData.fiscalCondition}
                  onChange={handleChange}
                >
                  <option value="">Condicion fiscal</option>
                  <option value="ruc">RUC</option>
                  <option value="dni">DNI</option>
                  <option value="otro">Otro Documento</option>
                </select>

                <input
                  className="documentNumber"
                  placeholder="Número de Doc."
                  required
                  type="number"
                  id="documentNumber"
                  name="documentNumber"
                  value={formData.documentNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="a_Emp">
                <input
                  placeholder="Direccion"
                  required
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* lado derecho del formulario */}

            <div className="right_Emp">
              <div className="a_Emp">
                <input
                  placeholder="Apellidos"
                  required
                  type="text"
                  id="apellidos"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </div>
              <div className="a_Emp">
                <input
                  placeholder="Celular"
                  required
                  type="number"
                  id="numerocel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="a_Emp">
                <input
                  placeholder="Password"
                  required
                  type={showPassword ? "text" : "password"}
                  id="password-input"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >

                </button>
              </div>
              <div className="a_Emp">
                <input
                  placeholder="Razon Social"
                  required
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </div>
              <div className="a_Emp">
                <input
                  placeholder="Telefono de la Empresa"
                  required
                  type="number"
                  id="companyPhone"
                  name="companyPhone"
                  value={formData.companyPhone}
                  onChange={handleChange}
                />
              </div>
              <div className="a_Emp width_select">
                <select
                  name="quantityOfEmployees"
                  value={formData.quantityOfEmployees}
                  onChange={handleChange}
                >
                  <option value="">cantidad de empleados</option>
                  <option value="menos de 10">entre 1 y 10</option>
                  <option value="11 y 20">entre 11 y 20</option>
                </select>
              </div>
            </div>
            <div className="boton_Emp ">
              <button type="submit">Registrarse</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
