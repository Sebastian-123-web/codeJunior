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
        const data = await DataComDev(form.credencial);
        setDev(data)
    }


    const handleSubmit  = (e)  => {
        e.preventDefault();

        if(dev=="Not found"){
            return Swal.fire({
                title : "Falta Seleccionar el tipo de Entidad",
                text: "Desarrollador o Empresa",
                icon:"warning",
            });
        }

        const developer = dev.find((c)=>(c.correo === form.fuser));
        if(developer === undefined){
            return Swal.fire({
                title : "Correo y/o contraseña Erróneas",
                icon:"error",
            });
        }
        const password = developer.password === form.fpassword ? true : false;
        const email = form.fuser

        if(password == true){
            navigate(`/${form.credencial}/${form.fuser}`, {
              replace:true,
              state: {
                logged: true,
                email
              }
            })
        }else{
            Swal.fire({
                title : "Correo y/o contraseña Erróneas",
                icon:"error",
            });
        }
    }

    useEffect(()=>{
        fetchDev()
    },[form.credencial])

    return(
        <div className="container-login">
            <div className="container-left">
                <div className="image-lgn-container">
                    <img src={image}  alt="trabajo remoto" />
                </div>
            </div>
            <div className="container-right">
                <section className="form-contain">
                <div className="text-container">
                    <span>
                        Bienvenidos a
                    <h2 className="logo logoform">Dev<span className="logo-extend logo-formjr">Juniors!</span></h2>
                    </span>
                </div>
                <form className="container__form" action="/" onSubmit={handleSubmit}>
                        <p>Elige si eres empresa o desarrollador</p>
                    <div className="container__inputs">
                        <select name="credencial" onChange={handleChange} defaultValue="" className="container-select">
                            <option value="error">---</option>
                            <option value="business">Empresa</option>
                            <option value="developers">Desarrollador</option>
                        </select>
                            <input type="text" id="fuser" name="fuser"  className="user ipts-lg" placeholder="Usuario" value={form.fuser} onChange={handleChange} autoComplete="name" required />
                            <input type="password" id="fpassword" name="fpassword" className="pswd ipts-lg" placeholder="Contraseña" value={form.fpassword} onChange={handleChange} autoComplete="on" required />
                    </div>
                    <div className="container__btn">
                        <button className="btn--submit">Login</button>
                    </div>
                </form>
                </section>
            </div>
        </div>
    )
}

export {LoginHome};