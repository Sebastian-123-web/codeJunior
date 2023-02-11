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
        console.log(form.credencial);
        const data = await DataComDev(form.credencial);
        setDev(data)
        console.log(data)
    }

    const handleSubmit  = (e)  => {
        e.preventDefault();

        const correo = dev.some((c)=>(c.correo === form.fuser));
        const password = dev.some((c)=>(c.password === form.fpassword));
        const email = form.fuser

        if(correo && password){
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
                            <option value="">---</option>
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