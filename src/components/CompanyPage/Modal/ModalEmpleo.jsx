import './ModalRedes.css'
import './ModalEmpleo.css'

const ModalEmpleo = () => {
    return (
        <div className="modal-redes">
            <h2 className='mb-'>Añadir puesto de trabajo</h2>
            <div className="modal-trabajos-container">
                <input type="text" placeholder='Puesto de Trabajo' className='input-redes mb-' />
                <input type="text" placeholder='Nivel' className='input-redes mb-' />
                <select name="" id="" className='input-redes select-option mb-'>
                    <option defaultChecked>Selecione el tipo trabajo</option>
                    <option value="">Presencial</option>
                    <option value="">Remoto</option>
                </select>
                <select name="" id="" className='input-redes select-option mb-'>
                    <option defaultChecked>Selecione el tiempo</option>
                    <option value="">Full time</option>
                    <option value="">Part Time</option>
                </select>
                <input type="text" placeholder='Sueldo' className='input-redes mb-' />
                <select name="" id="" className='input-redes select-option mb-'>
                    <option defaultChecked>Seleccione Tecnologia</option>
                    <option value="">HTML</option>
                    <option value="">CSS</option>
                    <option value="">Javascript</option>
                    <option value="">React</option>
                    <option value="">Angular</option>
                    <option value="">Node.js</option>
                    <option value="">Phytom</option>
                    <option value="">C#</option>
                    <option value="">C++</option>
                </select>
            </div>
            <button className='btn-redes'>Añadir</button>
        </div>
    )
}

export default ModalEmpleo;