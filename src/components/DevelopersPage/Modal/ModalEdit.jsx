

const ModalEdit = () => {
    return(
        <div className="modal-editar">
            <div className="modal-input">
                <h2>Editar Perfil</h2>
                <input type="text" placeholder="Editar nombre" />
                <input type="text" placeholder="Editar apellido" />
                <input type="text" placeholder="Editar cargo" />
                <input type="text" placeholder="Editar telefono" />
                <input type="text" placeholder="Editar correo" />
                <input type="text" placeholder="Editar biografia" />
                <div>
                    <input type="text" placeholder="Nombre a mostrar" />
                    <input type="text" placeholder="Link de Perfil de Github" />
                </div>
                <div>
                    <input type="text" placeholder="Nombre a mostrar" />
                    <input type="text" placeholder="Link de Portafolio" />
                </div>
                <div>
                    <input type="text" placeholder="Nombre a mostrar" />
                    <input type="text" placeholder="Link de Perfil de Linkedin" />
                </div>
                <input type="text" placeholder="Editar " />
            </div>
        </div>
    )
}

export default ModalEdit;