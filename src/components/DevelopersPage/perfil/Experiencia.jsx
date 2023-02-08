import { useEffect, useState } from "react";
import { DataDevCom } from "../../../services/DataDevCom";

const Experiencia = () => {

    const [ exp, setExp ] = useState([]);

    const fetchExp = async(id, type) => {
        const dataExp = await DataDevCom(id, type);
        setExp(dataExp.experiencia);
    }
    useEffect( ()=>{
        fetchExp(2, "developers")
    }, [] )

    return (
        <div className="my-experience card mb">
            <h2 className="subtitle"><ion-icon name="bag"></ion-icon> Mi Experiencia</h2>
            {
                exp.length > 0 && exp.map((e)=>(
                    <div className="business">
                        <div className="business-info">
                            <div className="business-name">
                                <h3><ion-icon name="business"></ion-icon> {e.name_biss}</h3>
                                <p><ion-icon name="calendar"></ion-icon> {e.rang_fecha}</p>
                            </div>
                            <p>{e.cargo}</p>
                        </div>
                        <img src={e.logo_biss} alt="" className="photo-business" height={57} width={57} />
                    </div>
                ))
            }
        </div>
    )
}

export default Experiencia;