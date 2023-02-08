import React from "react";
import { useState } from "react";
import image from '../../../assets/Home/assetsHome/trabajoremoto.jpg';
import './LoginHome.css'
import { Link } from "react-router-dom";

const LoginHome = () => {

    const[user,setUser] = useState("");
    const[pswrd, setPswrd] = useState("");

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
                <form className="container__form" action="/">
                    <div className="container__inputs">
                        <label htmlFor="fuser" className="user__label--1">
                            <input type="text" id="fuser" name="fuser"  className="user" placeholder="Ingresa tu usuario" value={user} onChange={(e)=>setUser(e.target.value)} autoComplete="name" required />
                        </label>
                        <label htmlFor="fpassword" className="password__label--2">
                            <input type="password" id="fpassword" name="fpassword" className="pswd" placeholder="Ingresa tu password" value={pswrd} onChange={(e)=>setPswrd(e.target.value)} autoComplete="on" required />
                        </label>
                    </div>
                    <div className="container__btn">
                        <button className="btn--submit" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export {LoginHome};