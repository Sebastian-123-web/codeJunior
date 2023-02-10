import React from "react";
import { useState } from "react";
import image from '../../../assets/Home/assetsHome/trabajoremoto.jpg';
import './LoginHome.css'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LoginHome = () => {

    const[form,setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })

    }

    const handleSubmit  = (e)  => {
        e.preventDefault();
        Swal.fire({
            title : "Envio exitoso",
            text : "El formulario, se ha enviado",
            icon:"success",
        });
    }

    return(
        <div className="container-login">
            <div className="container-right">
                <div className="text-container">
                    <h2 className="logo">Dev<span className="logo-extend">Juniors</span></h2>
                    <p>Descubre todas las oportunidades laborales y candidatos disponibles para ti ingresando  a nuestra plataforma, puedes ingresar como desarrollador o como empresa dependiendo del perfil</p>
                </div>
                <div className="image-lgn-container">
                    <img src={image}  alt="trabajo remoto" />
                </div>
            </div>
            <div className="container-left">
                <p>Bienvenido a DevJuniors, eres nuevo registrate <Link className="here" to="/">aqui</Link> o vuelve al <Link className="home" to="/">inicio</Link></p>
                <form className="container__form" action="/" onSubmit={handleSubmit}>
                    <div className="container__inputs">
                        <p>Elige si eres empresa o desarrollador</p>
                        <select name="credencial" onChange={handleChange} defaultValue="" className="container-select">
                            <option value="">-----------------------------</option>
                            <option value="empresa">Empresa</option>
                            <option value="desarrollador">Desarrollador</option>
                        </select>
                        <label htmlFor="fuser" className="user__label--1">
                            <input type="text" id="fuser" name="fuser"  className="user" placeholder="Ingresa tu usuario" value={form.fuser} onChange={handleChange} autoComplete="name" required />
                        </label>
                        <label htmlFor="fpassword" className="password__label--2">
                            <input type="password" id="fpassword" name="fpassword" className="pswd" placeholder="Ingresa tu password" value={form.fpassword} onChange={handleChange} autoComplete="on" required />
                        </label>
                    </div>
                    <div className="container__btn">
                        <button className="btn--submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export {LoginHome};