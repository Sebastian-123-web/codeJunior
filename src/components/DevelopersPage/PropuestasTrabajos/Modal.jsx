import './Modal.css';
import Perfil from '../../../pages/Business/Perfil/Perfil';

const Modal = () => {
    return (
        <div className="modal-container">
            <div>
                <h2 className='mb'>Desarrollador Frontend</h2>
                <button className='btn-Postular mb'>Postular</button>
                <h3 className='mb'>Requisitos</h3>
                <p className='mb'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorem consequuntur ipsam fuga. Eveniet, expedita, dolore distinctio autem assumenda tempora maxime temporibus fuga voluptates aut magnam facere placeat, nam laborum.</p>
                <h3 className='mb'>Funciones del cargo</h3>
                <p className='mb'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, mollitia! Laboriosam, consequuntur natus, libero a quod commodi soluta rem modi delectus, alias earum quas numquam accusantium cum repellat recusandae distinctio!</p>
                <h3 className='mb'>Tecnoligias</h3>
                <div className='tecnologias'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Modal