import './ModalRedes.css'

const ModalEdit = () => {
    return (
        <div className="modal-redes">
            <div className="modal-redes-container">
                <h2 className='mb-'>Añadir Red Social</h2>
                <select name="" id="" className='input-redes select-option mb-'>
                    <option defaultChecked>Select Socialnet</option>
                    <option value="">Whatsapp</option>
                    <option value="">Instagram</option>
                    <option value="">Facebook</option>
                    <option value="">Tiktok</option>
                    <option value="">Twitter</option>
                    <option value="">Telegram</option>
                </select>
                <input type="text" className='input-redes mb-' placeholder='Add link Social Net, example: https://www.socialnet.com/usuario' />
                <button className='btn-redes'>Añadir</button>
            </div>
        </div>
    )
}

export default ModalEdit;