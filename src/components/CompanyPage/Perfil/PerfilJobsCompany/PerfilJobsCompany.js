import React, { useEffect, useState } from 'react'
import './PerfilJobsCompany.css'

const PerfilJobsCompany = (props) => {
    const [ job, setJob ] = useState([]);

    const trabajo = () => {
        setJob(props.puestosEmpresa)
        console.log(props.puestosEmpresa)
    }

    useEffect(() => {
        trabajo()
    }, [props.puestosEmpresa])

    return (
    <section className='jobs-company'>
        <div className='jobs-section-button'>
          <button>job +</button>
        </div>
        <section className='jobs-section'>
            <div className='jobs-cards-section'>
            { job?.length && job?.map((element) => (
                    <div className="job control-job">
                       <div className='job_info'>
                           <div className="job_img">
                               <img src={props.logoEmpresa} alt="" width={72} height={72} className="img-job" />
                           </div>
                           <div className="job_descr">
                               <p className="p-descr">{props.nombreEmpresa}</p>
                               <h2 className='h2-cargo'> {element.cargo_buscado} | {element.nivel_dev} </h2>
                               <p className="p-descr"><ion-icon name="wifi"></ion-icon> {element.tipo_trabajo} | {element.tiempo_trabajo} | {element.sueldo_trabajo} </p>
                           </div>
                       </div>
                       <div className="job_tec">
                            {
                                element.tecnologias.length > 0 && element.tecnologias.map((image)=>(
                                    <img src={image.icon} alt="" width={20} height={20} />
                                ))
                            }
                       </div>
                    </div>
                ))}
            </div>
        </section>
    </section>
  )
}

export default PerfilJobsCompany
