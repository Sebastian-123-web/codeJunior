import './PuestosTrabajo.css'
import puesto_trabajos_team from  '../../../assets/Developer/puesto_trabajos-team.svg';
import { useEffect, useState } from 'react';
import { DataComDev } from '../../../services/Company/DataComDevs';
import Propuesta from '../../../components/DevelopersPage/PropuestasTrabajos/Propuesta';

const PuestosTrabajos = () => {

    const [ business, setBusiness ] = useState([]);
    const [ search, setSearch ] = useState("")

    const fetchBusiness = async() => {
        const dataBusiness = await DataComDev('business');
        setBusiness(dataBusiness);
    }

    const handleSearch = (e) => {
        const valueInput = e.target.value

        if (valueInput.length == 0) {
            fetchBusiness()
        }

        if (valueInput.length > 3) {
            const newData = business.filter((name) => name.puestos_trabajos[0].cargo_buscado.toUpperCase().includes(valueInput.toUpperCase()));
            setBusiness(newData) 
        }

        if (valueInput.length > 3) {
            const newData = business.filter((name) => name.puestos_trabajos[0].tipo_trabajo.toUpperCase().includes(valueInput.toUpperCase()));
            setBusiness(newData) 
        }

        if (valueInput.length > 3) {
            const newData = business.filter((name) => name.puestos_trabajos[0].tiempo_trabajo.toUpperCase().includes(valueInput.toUpperCase()));
            setBusiness(newData) 
        }

        if (valueInput.length > 3) {
            const newData = business.filter((name) => name.nombre_empresa.toUpperCase().includes(valueInput.toUpperCase()));
            setBusiness(newData) 
        }

    }

    useEffect(()=>{
        fetchBusiness();
    },[])

    return(
        <div className="puestos_trabajos">
            <div className="banner">
                <img src={puesto_trabajos_team} alt="" className='banner-img' />
                <h1 className='banner-50'>Encuentra el empleo que se acomode mas a tus grandes habilidades</h1>
            </div>
            <div className="search_job">
                <input onChange={handleSearch} type="text" className='search_job_-input' placeholder='Buscar Empleo' />
            </div>
            <Propuesta business={business} />
        </div>
    )
}

export default PuestosTrabajos;