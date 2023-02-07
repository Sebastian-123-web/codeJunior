import React, { useEffect, useState, useTransition } from 'react'
import "./DevForm.css";


export default function DevForm() {

  const [nombres,setNombres]= useState("");
  const [apellidos, setApellidos] = useState("");
  const [tipodoc, setTipodoc] = useState("");
  const [numerodni, setNumerodni] = useState("");
  const [numerocel, setNumerocel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit=e=>{
  // e.preventDefault();
  alert("El formulario se envio")
}

  return (
    <>
      <main>
        <section className="tarjeta">
          <h2> Formulario de registro</h2>

          <form className="devform" onSubmit={handleSubmit}>
            <div className="a">
              <label htmlFor="nombres">Nombres: </label>
              <input
                required
                type="text"
                id="nombres"
                name="nombres"
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
              />
            </div>
            <div className="a">
              <label htmlFor="apellidos">Apellidos: </label>
              <input
                required
                type="text"
                id="apellidos"
                name="apellidos"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
              />
            </div>
            <div className="a">
              <label htmlFor="tipodoc">Tipo Documento: </label>
              <select
                name="tipodoc"
                value={tipodoc}
                onChange={(e) => setTipodoc(e.target.value)}
              >
                <option value="">-------</option>
                <option value="dni">Dni</option>
                <option value="pasaporte">Pasaporte</option>
              </select>

              <label htmlFor="numerodni">Numero: </label>
              <input
                required
                type="number"
                id="numerodni"
                name="numerodni"
                value={numerodni}
                onChange={(e) => setNumerodni(e.target.value)}
              />
            </div>
            <div className="a">
              <label htmlFor="numerocel">Celular: </label>
              <input
                required
                type="number"
                id="numerocel"
                name="numerocel"
                value={numerocel}
                onChange={(e) => setNumerocel(e.target.value)}
              />
            </div>
            <div className="a">
              <label htmlFor="email">Email: </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="a">
              <label htmlFor="password">Password: </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="a">
              <input type="submit" />
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
