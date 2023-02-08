import React from "react";
import perfil1 from '../../../assets/Home/assetsHome/perfil-1.jpg';
import perfil2 from '../../../assets/Home/assetsHome/perfil-22.jpg';
import perfil3 from '../../../assets/Home/assetsHome/perfil-3.jpg';
import desarrollador from '../../../assets/Home/assetsHome/desarrollador.svg';
import empresa from '../../../assets/Home/assetsHome/empresa.svg';
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
                    <div className="content-left">
                        <h2 className="content-title">Como funcionamos?</h2>
                        <p className="content-text">Te ayudamos a encontrar el candidato ideal para tu empresa a traves de un proceso de seleccion de candidatos con perfil orientado a desarrollo de software.</p>
                    </div>
                    <div className="content-rigth">
                        <h2 className="content-title">Desarrollador Junior</h2>
                        <p className="content-text">Si buscas iniciar tu primera experiencia laboral en el desarrollo de software o cuentas con una experiencia menor a 2 años.</p>
                    </div>
                </section>
                <section className="testimonials">
                    <div className="card">
                        <p className="card-star">★★★★★</p>
                        <img className="card-img" src={perfil1} alt="perfil 1" />
                        <p className="card-text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, est.</p>
                        <p className="card-user">user-1</p>
                        <p className="card-text">CEO empresa 1</p>
                    </div>
                    <div className="card">
                        <p className="card-star">★★★★★</p>
                        <img className="card-img" src={perfil2} alt="perfil 2" />
                        <p className="card-text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, est.</p>
                        <p className="card-user">user-2</p>
                        <p className="card-text">CTO empresa 2</p>
                    </div>
                    <div className="card">
                        <p className="card-star">★★★★★</p>
                        <img className="card-img" src={perfil3} alt="perfil 3" />
                        <p className="card-text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, est.</p>
                        <p className="card-user">user-3</p>
                        <p className="card-text">CEO y fundador empresa 3</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export {MainHome};