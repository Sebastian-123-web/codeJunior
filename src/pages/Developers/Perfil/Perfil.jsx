import './Perfil.css'
import { useEffect, useState } from "react"

const Perfildeveloper = () => {

    const [ user, setUser ] = useState({})

    // const fetchDataUser = async() => {
    //     const user = await DataUser();
    //     setUser(user);
    //     console.log(user);
    // }

    // useEffect( () => {
    //     fetchDataUser();
    // }, [] )

    return (
        <div className="container">
            <div className="header-dev">
                <img src="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1425034585/content-items/001/228/844/sesion-estudio-barcelona-10-original.jpg?1425034585" alt="" className="photo-perfil" width={100} />
            </div>
            <div className="data-dev">
                <div className="col">
                    <div className="info-dev mb card">
                        <h2 className="name-dev">Miguel Rodriguez <ion-icon name="person"></ion-icon></h2>
                        <h4 className="job-dev">Desarrollador Frontend <ion-icon name="code-outline"></ion-icon></h4>
                        <p><ion-icon name="call-outline"></ion-icon> 987654321</p>
                        <p><ion-icon name="mail-outline"></ion-icon> mrodriguez@gmail.com</p>
                        <button className="btn-edit">Editar Perfil</button>
                    </div>
                    <div className="about-me card">
                        <h2 className="subtitle">Sobre mi <ion-icon name="person"></ion-icon></h2>
                        <p>Lorem ipsum dolor 😀 sit amet consectetur adipisicing elit. Nisi vero 😄 amet libero esse ex molestiae autem fuga aut nesciunt harum 😆 iusto quos suscipit quae rerum officia animi omnis a rem!</p>
                        <a href="" target="_blank" className="link"><ion-icon name="logo-github"></ion-icon> @miguel-rodriguez</a>
                        <a href="" target="_blank" className="link"><ion-icon name="globe-outline"></ion-icon> https://portafolio.com</a>
                        <a href="" target="_blank" className="link"><ion-icon name="logo-linkedin"></ion-icon> @Miguel Rodriguez</a>
                    </div>
                </div>
                <div className="col">
                    <div className="education card mt mb">
                        <h2 className="subtitle">Educacion <ion-icon name="school"></ion-icon></h2>
                        <div className="my-education">
                            <div className="institution">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Seal_of_Pontifical_Catholic_University_of_Peru.svg/1200px-Seal_of_Pontifical_Catholic_University_of_Peru.svg.png" alt="" width={66} height={66} />
                                <div className="institution-text">
                                    <p>Pontificia Universidad Católica del Perú</p>
                                    <p>Ingenieria de Sistemas</p>
                                </div>
                                <img src="https://marketplace.canva.com/EAFQNGff-B8/1/0/1600w/canva-certificado-de-reconocimiento-simple-azul-y-amarillo-jVqupEcSv7g.jpg" alt="" width={70}/>
                            </div>
                            <div className="institution">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Seal_of_Pontifical_Catholic_University_of_Peru.svg/1200px-Seal_of_Pontifical_Catholic_University_of_Peru.svg.png" alt="" width={66} height={66} />
                                <div className="institution-text">
                                    <p>Pontificia Universidad Católica del Perú</p>
                                    <p>Ingenieria de Sistemas</p>
                                </div>
                                <img src="https://marketplace.canva.com/EAFQNGff-B8/1/0/1600w/canva-certificado-de-reconocimiento-simple-azul-y-amarillo-jVqupEcSv7g.jpg" alt="" width={70}/>
                            </div>
                            <div className="institution">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Seal_of_Pontifical_Catholic_University_of_Peru.svg/1200px-Seal_of_Pontifical_Catholic_University_of_Peru.svg.png" alt="" width={66} height={66} />
                                <div className="institution-text">
                                    <p>Pontificia Universidad Católica del Perú</p>
                                    <p>Ingenieria de Sistemas</p>
                                </div>
                                <img src="https://marketplace.canva.com/EAFQNGff-B8/1/0/1600w/canva-certificado-de-reconocimiento-simple-azul-y-amarillo-jVqupEcSv7g.jpg" alt="" width={70}/>
                            </div>
                            <div className="institution">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Seal_of_Pontifical_Catholic_University_of_Peru.svg/1200px-Seal_of_Pontifical_Catholic_University_of_Peru.svg.png" alt="" width={66} height={66} />
                                <div className="institution-text">
                                    <p>Pontificia Universidad Católica del Perú</p>
                                    <p>Ingenieria de Sistemas</p>
                                </div>
                                <img src="https://marketplace.canva.com/EAFQNGff-B8/1/0/1600w/canva-certificado-de-reconocimiento-simple-azul-y-amarillo-jVqupEcSv7g.jpg" alt="" width={70}/>
                            </div>
                        </div>
                    </div>
                    <div className="my-experience card mb">
                        <h2 className="subtitle">Mi Experiencia <ion-icon name="bag"></ion-icon></h2>
                        <div className="business">
                            <div className="business-info">
                                <div className="business-name">
                                    <h3><ion-icon name="business"></ion-icon> Facebook</h3>
                                    <p><ion-icon name="calendar"></ion-icon> 2019 - 2022</p>
                                </div>
                                <p>Desarrollador Frontend(maquetado)</p>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/220px-Logo_de_Facebook.png" alt="" className="photo-business" height={57} width={57} />
                        </div>

                        <div className="business">
                            <div className="business-info">
                                <div className="business-name">
                                    <h3><ion-icon name="business"></ion-icon> Cisco</h3>
                                    <p><ion-icon name="calendar"></ion-icon> 2017 - 2018</p>
                                </div>
                                <p>Desarrollador Frontend(maquetado)</p>
                            </div>
                            <img src="https://pbs.twimg.com/profile_images/1544726310123102211/9Y8BuoCn_400x400.png" alt="" className="photo-business" height={57} width={57} />
                        </div>

                        <div className="business">
                            <div className="business-info">
                                <div className="business-name">
                                    <h3><ion-icon name="business"></ion-icon> Microsoft</h3>
                                    <p><ion-icon name="calendar"></ion-icon> 2015 - 2027</p>
                                </div>
                                <p>Desarrollador Frontend(maquetado)</p>
                            </div>
                            <img src="https://www.microsoft.com/es-es/microsoft-365/blog/wp-content/uploads/sites/26/2022/06/cropped-microsoft_logo_element.png" alt="" className="photo-business" height={57} width={57} />
                        </div>
                    </div>
                    <div className="skills card">
                        <h2 className="subtitle">Tecnologias Dominadas <ion-icon name="build"></ion-icon></h2>
                        <div className="skills-icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" className="img-skill" />
                            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" className="img-skill" />
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" className="img-skill" />
                            <img src="https://cdn-icons-png.flaticon.com/512/1260/1260775.png" alt="" className="img-skill" />
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="" className="img-skill" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfildeveloper;