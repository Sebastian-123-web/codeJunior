import './PuestosTrabajo.css'
import puesto_trabajos_team from  '../../../assets/Developer/puesto_trabajos-team.svg';
import { useState } from 'react';
import { DataComDev } from '../../../services/Company/DataComDevs';

const PuestosTrabajos = () => {

    const [ business, setBusiness ] = useState({});

    const fetchBusiness = async() => {
        const dataBusiness = DataComDev('business');
    }

    return(
        <div className="puestos_trabajos">
            <div className="banner">
                <img src={puesto_trabajos_team} alt="" className='banner-img' />
                <h1 className='banner-50'>Encuentra el empleo que se acomode mas a tus grandes habilidades</h1>
            </div>
            <div className="search_job">
                <input type="text" className='search_job_-input' placeholder='Buscar Empleo' />
            </div>
            <div className="jobs">
                <div className="job">
                    <div className='job_info'>
                        <div className="job_img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/220px-Logo_de_Facebook.png" alt="" width={72} height={72} className="img-job" />
                        </div>
                        <div className="job_descr">
                            <p className="p-descr">Facebook</p>
                            <h2 className='h2-cargo'>Desarrollador Web frontend | Junior</h2>
                            <p className="p-descr"><ion-icon name="wifi"></ion-icon> Remoto(Peru) | Full Time | $2000</p>
                        </div>
                    </div>
                    <div className="job_tec">
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" width={20} height={20} />
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" width={20} height={20} />
                        <img src="https://cdn-icons-png.flaticon.com/512/1260/1260775.png" alt="" width={20} height={20} />
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="" width={20} height={20} />
                    </div>
                </div>
                <div className="job">
                    <div className='job_info'>
                        <div className="job_img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/220px-Logo_de_Facebook.png" alt="" width={72} height={72} className="img-job" />
                        </div>
                        <div className="job_descr">
                            <p className="p-descr">Facebook</p>
                            <h2 className='h2-cargo'>Desarrollador Web frontend | Junior</h2>
                            <p className="p-descr"><ion-icon name="wifi"></ion-icon> Remoto(Peru) | Full Time | $2000</p>
                        </div>
                    </div>
                    <div className="job_tec">
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" width={20} height={20} />
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" width={20} height={20} />
                        <img src="https://cdn-icons-png.flaticon.com/512/1260/1260775.png" alt="" width={20} height={20} />
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="" width={20} height={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PuestosTrabajos;