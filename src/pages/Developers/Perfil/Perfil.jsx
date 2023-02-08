import './Perfil.css'
import { useEffect, useState } from "react"
import { DataDevCom } from '../../../services/DataDevCom'

const Perfildeveloper = () => {

    const [ dev, setDev ] = useState({})

    const fetchDev = async(id, dev) => {
        const dataDev = await DataDevCom(id, dev);
        setDev(dataDev);
    }

    useEffect( () => {
        fetchDev(2, "developers");
    }, [] )

    return (
        <div className="container">
            <div className="header-dev">
                <img src={dev.foto_perfil} alt="" className="photo-perfil" width={100} />
            </div>
            <div className="data-dev">
                <div className="col">
                    <div className="info-dev mb card">
                        <h2 className="name-dev"><ion-icon name="person"></ion-icon> { dev.nombre + " " + dev.apellido }</h2>
                        <h4 className="job-dev"><ion-icon name="code-outline"></ion-icon> { dev.cargo }</h4>
                        <p><ion-icon name="call-outline"></ion-icon> { dev.telefono }</p>
                        <p><ion-icon name="mail-outline"></ion-icon> {dev.correo}</p>
                        <button className="btn-edit">Editar Perfil</button>
                    </div>
                    <div className="about-me card">
                        <h2 className="subtitle"><ion-icon name="person"></ion-icon> Sobre mi</h2>
                        <p>{dev.biografia}</p>
                        <a href="#" target="_blank" className="link"><ion-icon name="logo-github"></ion-icon> @miguel-rodriguez</a>
                        <a href="#" target="_blank" className="link"><ion-icon name="globe-outline"></ion-icon> https://portafolio.com</a>
                        <a href="#" target="_blank" className="link"><ion-icon name="logo-linkedin"></ion-icon> @Miguel Rodriguez</a>
                    </div>
                </div>
                <div className="col">
                    <div className="education card mt mb">
                        <h2 className="subtitle"><ion-icon name="school"></ion-icon> Educacion</h2>
                        <div className="my-education">
                            <div className="institution">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Seal_of_Pontifical_Catholic_University_of_Peru.svg/1200px-Seal_of_Pontifical_Catholic_University_of_Peru.svg.png" alt="" width={66} height={66} />
                                <div className="institution-text">
                                    <p>Pontificia Universidad Católica del Perú</p>
                                    <p>Ingenieria de Sistemas</p>
                                </div>
                                <img src="https://marketplace.canva.com/EAFQNGff-B8/1/0/1600w/canva-certificado-de-reconocimiento-simple-azul-y-amarillo-jVqupEcSv7g.jpg" alt="" width={70}/>
                            </div>
                        </div>
                    </div>
                    <div className="my-experience card mb">
                        <h2 className="subtitle"><ion-icon name="bag"></ion-icon> Mi Experiencia</h2>
                        <div className="business">
                            <div className="business-info">
                                <div className="business-name">
                                    <h3><ion-icon name="business"></ion-icon> Facebook</h3>
                                    <p><ion-icon name="calendar"></ion-icon> 2019 - 2022</p>
                                </div>
                                <p>Desarrollador Frontend(maquetado)</p>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/220px-Logo_de_Facebook.png" alt="" className="photo-business" height={57} width={57} />
                        </div>
                    </div>
                    <div className="skills card">
                        <h2 className="subtitle"><ion-icon name="build"></ion-icon> Tecnologias Dominadas</h2>
                        <div className="skills-icon">
                            {/* {dev.experiencia.length} */}
                            <img src="" alt="" className="img-skill" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfildeveloper;