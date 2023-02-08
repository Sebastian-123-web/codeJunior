import { useEffect, useState } from "react";
import { DataDevCom } from "../../../services/DataDevCom";


const SobreMi = () => {

    const [ sob, setSob ] = useState([]);

    const fetchSob = async(id, type) => {
        const dataSob = await DataDevCom(id, type);
        setSob(dataSob);
    }

    useEffect(()=>{
        fetchSob(2, "developers");
    },[])

    return(
        <div className="about-me card">
            <h2 className="subtitle"><ion-icon name="person"></ion-icon> Sobre mi</h2>
            <p>{ sob.biografia }</p>
            {
                sob.redes.length > 0 && sob.redes.map((s)=>(
                    <a href={s.link} target="_blank" className="link"><ion-icon name="logo-github"></ion-icon> @</a>
                ))
            }
            <a href="#" target="_blank" className="link"><ion-icon name="globe-outline"></ion-icon> https://portafolio.com</a>
            <a href="#" target="_blank" className="link"><ion-icon name="logo-linkedin"></ion-icon> @Miguel Rodriguez</a>
        </div>
    )
}

export default SobreMi;