import './Perfil.css'
import { useEffect, useState } from "react"
import { DataDevCom } from '../../../services/DataDevCom'
import Tecnologias from '../../../components/DevelopersPage/perfil/Tecnologias'
import Experiencia from '../../../components/DevelopersPage/perfil/Experiencia'
import Educacion from '../../../components/DevelopersPage/perfil/Educacion'
import SobreMi from '../../../components/DevelopersPage/perfil/SobreMi'

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
                    <SobreMi />
                </div>
                <div className="col">
                    <Educacion />
                    <Experiencia />
                    <Tecnologias />
                </div>
            </div>
        </div>
    )
}

export default Perfildeveloper;