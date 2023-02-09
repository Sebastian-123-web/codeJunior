import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const InformacionDev = (props) => {

    return (
        <div className="info-dev mb card">
            <h2 className="name-dev"><ion-icon name="person"></ion-icon> { props.nombre + " " + props.apellido }</h2>
            <h4 className="job-dev"><ion-icon name="code-outline"></ion-icon> { props.cargo || <Skeleton /> }</h4>
            <p><ion-icon name="call-outline"></ion-icon> { props.telefono || <Skeleton /> }</p>
            <p><ion-icon name="mail-outline"></ion-icon> {props.correo || <Skeleton />}</p>
            <button className="btn-edit">Editar Perfil</button>
        </div>
    )
}

export default InformacionDev;