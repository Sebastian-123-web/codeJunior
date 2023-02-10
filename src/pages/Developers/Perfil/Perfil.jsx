import './Perfil.css'
import { useEffect, useState } from "react"
import { DataDevCom } from '../../../services/DataDevCom'
import Tecnologias from '../../../components/DevelopersPage/perfil/Tecnologias'
import Experiencia from '../../../components/DevelopersPage/perfil/Experiencia'
import Educacion from '../../../components/DevelopersPage/perfil/Educacion'
import SobreMi from '../../../components/DevelopersPage/perfil/SobreMi'
import InformacionDev from '../../../components/DevelopersPage/perfil/InformacionDev'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Perfildeveloper = () => {

    const [ dev, setDev ] = useState({});
    const [id, setId] = useState(2);
    const [tec, setTec] = useState([]);
    const [exp, setExp] = useState([]);
    const [edu, setEdu] = useState([]);
    const [sob, setSob] = useState([]);

    const fetchDev = async(id, dev) => {
        const dataDev = await DataDevCom(id, dev);
        setDev(dataDev);
        setTec(dataDev.tecnologia);
        setExp(dataDev.experiencia);
        setEdu(dataDev.educacion);
        setSob(dataDev.redes);
    }

    useEffect( () => {
        fetchDev(id, "developers");
    }, [] )

    return (
        <div className="container">
            <div className="header-dev">
                <img src={dev.foto_perfil} alt="" className="photo-perfil" width={100} />
            </div>
            <div className="data-dev">
                <div className="col">
                    <InformacionDev nombre={dev.nombre} apellido={dev.apellido} cargo={dev.cargo} telefono={dev.telefono} correo={dev.correo} />
                    <SobreMi bio={dev.biografia} sob={sob} />
                </div>
                <div className="col">
                    <Educacion educacion={edu} />
                    <Experiencia experiencia={exp} />
                    <Tecnologias tecnologia={tec} />
                </div>
            </div>
        </div>
    )
}

export default Perfildeveloper;