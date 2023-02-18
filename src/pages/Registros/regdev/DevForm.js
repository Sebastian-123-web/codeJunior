import React, { useState } from "react";
import "./DevForm.css";
import show from "../../../assets/FormIcons/show.png";
import hide from "../../../assets/FormIcons/hide.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate() 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a una API o base de datos
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¡Tu información se ha registrado correctamente!",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Ir al login",
        cancelButtonText: "Ir al inicio",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isDismissed) {
          navigate(`/login`);
        }
        if (result.isConfirmed) {
          navigate(`/login`);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          navigate(`/`);
        }
      });
  };

  return (
    <section className="form-content">
      <section className="tarjeta inputs-tarjet">
        <h2> Formulario de registro</h2>

        <form className="devform" onSubmit={handleSubmit}>
          <section className="inputs-form-submit">
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
              <div className="a password-ctn-form">
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
                  className="show-password"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img
                    className="hide-password-form"
                    src={showPassword ? hide : show}
                    alt="showPasswordIcon"
                  />
                </button>
              </div>
            </div>
          </section>
          <div className="boton btn-dev-reg">
            <button type="submit">Registrarse</button>
          </div>
        </form>
      </section>
    </section>
  );
}
