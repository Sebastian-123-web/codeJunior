import { useEffect, useState } from "react";
import Modal from "./Modal";
import './Propuesta.css'

const Propuesta = (props) => {

    const [pro, setPro] = useState([]);
    const [modal, setModal] = useState(false);

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
                    <div className="job" onClick={()=>setModal(!modal)}>
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
            <div className={`modal-business ${modal && 'activebusiness'}`}>
                <section className={`modal-business-background ${modal && 'activemodalbusiness'}`} onClick={()=>setModal(!modal)}></section>
                <Modal />
            </div>
        </div>
    )
}

export default Propuesta;