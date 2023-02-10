import React, {  useState } from 'react'
import "./DevForm.css";


export default function DevForm() {


 const [formData, setFormData] = useState({
   name: "",
   surname: "",
   documentType: "",
   documentNumber: "",
   phone: "",
   email: "",
   password: "",
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
   // Aquí puedes enviar los datos del formulario a una API o base de datos
   alert("El formulario se envio");
 };

  return (
    <>
      <main>
        <section className="tarjeta">
          <h2> Formulario de registro</h2>

          <form className="devform" onSubmit={handleSubmit}>
            <div className="left">
              <div className="a">
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
              <div className="tipoDeDoc a">
                <select
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleChange}
                >
                  <option value="">T.doc</option>
                  <option value="dni">Dni</option>
                  <option value="pasaporte">Pasaporte</option>
                </select>

                <input
                  className="number"
                  placeholder="Numero"
                  required
                  type="number"
                  id="numerodni"
                  name="documentNumber"
                  value={formData.documentNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="a">
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
            </div>
            <div className="right">
              <div className="a">
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
              <div className="a">
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
              <div className="a">
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
                  {showPassword ? "Ocultar" : "Mostrar"} contraseña
                </button>
              </div>
            </div>
            <div className="boton ">
              <button type="submit">Registrarse</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
