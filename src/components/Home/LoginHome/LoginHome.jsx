import React from "react";
import image from '../../../assets/Home/assetsHome/trabajoremoto.jpg';
import './LoginHome.css'

const LoginHome = () => {
    return(
        <div className="container">
            <div className="container-right">
                <div className="text-container">
                    <h2 className="logo">Dev<span className="logo-extend">Juniors</span></h2>
                    <p>Descubre todas las oportunidades laborales y candidatos disponibles para ti</p>
                </div>
                <div className="image-lgn-container">
                    <img src={image}  alt="trabajo remoto" />
                </div>
            </div>
            <div classname="container-left">
                <p>Bienvenido a DevJuniors, eres nuevo registrate <a href="">aqui</a> o vuelve al <a href="">inicio</a></p>
                <form class="container__form" action="/">
                    <div class="container__inputs">
                        <label for="fuser" class="user__label--1">
                            <input type="text" id="fuser" name="fuser"  class="user" placeholder="Ingresa tu usuario" autocomplete="name" required />
                        </label>
                        <label for="fpassword" class="container__label--2">
                            <input type="password" id="fpassword" name="fpassword" class="pswd" placeholder="Ingresa tu password" autocomplete="on" required />
                        </label>
                    </div>
                    <div class="container__btn">
                        <button class="btn--submit" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export {LoginHome};