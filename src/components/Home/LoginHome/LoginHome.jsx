import React, { useEffect } from "react";
import { useState } from "react";
import image from '../../../assets/Home/assetsHome/undraw-login.svg';
import './LoginHome.css'
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {DataComDev} from '../../../services/Company/DataComDevs'

const LoginHome = () => {

    const[form,setForm] = useState({fuser: ''});
    const [dev, setDev] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const fetchDev = async() =>{
        const data = await DataComDev('developers');
        setDev(data)
    }

    const handleSubmit  = (e)  => {
        e.preventDefault();

        const correo = dev.some((c)=>(c.correo === form.fuser));
        const password = dev.some((c)=>(c.password === form.fpassword));
        const email = form.fuser

        if(correo && password){
            navigate(`/company/${form.fuser}`, {
              replace:true,
              state: {
                logged: true,
                email
              }
            })
        }else{
            Swal.fire({
                title : "Correo y/o contraseña Erronas",
                icon:"error",
            });
        }

    }

    useEffect(()=>{
        fetchDev()
    },[])

    return(
        <div className="container-login">
            <div className="container-right">
                
                <div className="image-lgn-container">
                    <img src={image}  alt="trabajo remoto" />
                </div>
            </div>
            <div className="container-left">
                <div className="text-container">
                    <h2 className="logo logoform">Dev<span className="logo-extend">Juniors</span></h2>
                    <p>Descubre todas las oportunidades laborales y candidatos disponibles para ti ingresando  a nuestra plataforma, puedes ingresar como desarrollador o como empresa dependiendo del perfil</p>
                </div>
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