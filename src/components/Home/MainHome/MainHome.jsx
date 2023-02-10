import React from "react";
import perfil1 from '../../../assets/Home/assetsHome/perfil-1.jpg';
import perfil2 from '../../../assets/Home/assetsHome/perfil-22.jpg';
import perfil3 from '../../../assets/Home/assetsHome/perfil-3.jpg';
import desarrollador from '../../../assets/Home/assetsHome/desarrollador.svg';
import empresa from '../../../assets/Home/assetsHome/empresa.svg';
import { Link } from "react-router-dom";
import './MainHome.css'

const MainHome = () => {

    return(
        <>
            <main className="main">
                <section className="principal">
                    <div className="img-container">
                        <img src={empresa} alt="perfil de empresa" />
                        <button className="btn-1-principal">Empresa</button>
                    </div>
                    
                    <div className="img-container">
                        <img src={desarrollador} alt="perfil de desarrollador" />
                        <button className="btn-2-principal">Desarrollador</button>
                    </div>
                    
                </section>
                <section className="content">
                    <div className="content-left content-title-1">
                        <h2 className="content-title ">Como funcionamos?</h2>
                        <p className="content-text">Te ayudamos a encontrar el candidato ideal para tu empresa a traves de un proceso de seleccion de candidatos con perfil orientado a desarrollo de software podras visualizar los perfiles de diferentes desarrolladores de software.</p>
                    </div>
                    <div className="content-rigth content-title-2">
                        <h2 className="content-title ">Desarrollador Junior</h2>
                        <p className="content-text">Si buscas iniciar tu primera experiencia laboral en el desarrollo de software o cuentas con una experiencia menor a 2 años, podras conectarte con reconocidas empresas del rubro con la que podras entrar en contacto.</p>
                    </div>
                </section>
                <section className="testimonials">
                    <h2>Testimonios</h2>
                    <p>¿Que dicen de nosotros?</p>
                    <div className="card-containers">

                        <div id="carouselExampleIndicators" className="carousel slide movements">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="card-carrousels d-block w-100" id="card-carrousel-1">
                                        <div className="cards" id="card-1">
                                            <p className="card-star">★★★★★</p>
                                            <img className="cards-img" src={perfil1} alt="perfil 1" />
                                            <p className="card-text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, est.</p>
                                            <p className="card-user">user-1</p>
                                            <p className="card-text">CEO empresa 1</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                
                                    <div className="card-carrousels d-block w-100" id="card-carrousel-2">
                                        <div className="cards" id="card-2">
                                            <p className="card-star">★★★★★</p>
                                            <img className="cards-img" src={perfil2} alt="perfil 2" />
                                            <p className="card-text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, est.</p>
                                            <p className="card-user">user-2</p>
                                            <p className="card-text">CTO empresa 2</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="carousel-item">
                                
                                    <div className="card-carrousels d-block w-100" id="card-carrousel-3">
                                        <div className="cards" id="card-3">
                                            <p className="card-star">★★★★★</p>
                                            <img className="cards-img" src={perfil3} alt="perfil 3" />
                                            <p className="card-text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, est.</p>
                                            <p className="card-user">user-3</p>
                                            <p className="card-text">CEO y fundador empresa 3</p>
                                        </div>
                                    </div>   

                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export {MainHome};