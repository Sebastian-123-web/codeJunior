import { useEffect, useState } from "react";

const Propuesta = (props) => {

    const [pro, setPro] = useState([]);

    const fetchEdu = () => {
        setPro(props.business);
    }

    useEffect(()=>{
        fetchEdu();
    }, [props.business])

    return(
        <div className="jobs">
            {
                pro.length && pro.map((b)=>(
                    <div className="job">
                        <div className='job_info'>
                            <div className="job_img">
                                <img src={b.logo_empresa} alt="" width={72} height={72} className="img-job" />
                            </div>
                            <div className="job_descr">
                                <p className="p-descr">{b.nombre_empresa} </p>
                                <h2 className='h2-cargo'>{b.cargo_buscado} | {b.nivel_dev}</h2>
                                <p className="p-descr"><ion-icon name="wifi"></ion-icon> {b.tipo_trabajo} | {b.tiempo_trabajo} | {b.sueldo_trabajo}</p>
                            </div>
                        </div>
                        <div className="job_tec">
                            {
                                b.tecnologias.length && b.tecnologias.map((t)=>(
                                    <img src={t.icon} alt="" width={20} height={20} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Propuesta;