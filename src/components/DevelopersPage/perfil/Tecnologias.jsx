import { useEffect, useState } from "react";
import { DataDevCom } from "../../../services/DataDevCom";

const Tecnologias = () => {
    const [ tec, setTec ] = useState([]);

    const fetchTec = async(id, type) => {
        const dataTec = await DataDevCom(id, type);
        setTec(dataTec.tecnologia);
    }
    useEffect( ()=>{
        fetchTec(2, "developers")
    }, [] )

    return (
        <>
            <div className="skills card">
                <h2 className="subtitle"><ion-icon name="build"></ion-icon> Tecnologias Dominadas</h2>
                <div className="skills-icon">
                    {tec.length > 0 && tec.map((t)=>(
                        <img key={t.icon} src={t.icon} alt={t.name} className="img-skill" />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Tecnologias;