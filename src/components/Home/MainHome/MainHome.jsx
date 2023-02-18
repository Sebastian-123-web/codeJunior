import React from "react";
import perfil1 from '../../../assets/Home/assetsHome/perfil-1.jpg';
import perfil2 from '../../../assets/Home/assetsHome/perfil-22.jpg';
import perfil3 from '../../../assets/Home/assetsHome/perfil-3.jpg';
import empresa_fb from '../../../assets/Home/assetsHome/empresa_facebook.svg';
import empresa_cisco from '../../../assets/Home/assetsHome/empresa_cisco.svg';
import empresa_dell from '../../../assets/Home/assetsHome/empresa_dell.svg';
import empresa_discord from '../../../assets/Home/assetsHome/empresa_discord.svg';
import empresa_apple from '../../../assets/Home/assetsHome/empresa_apple.svg';
import empresa_github from '../../../assets/Home/assetsHome/empresa_github.svg';
import empresa_google from '../../../assets/Home/assetsHome/empresa_google.svg';
import empresa_ibm from '../../../assets/Home/assetsHome/empresa_ibm.svg';
import empresa_linkedin from '../../../assets/Home/assetsHome/empresa_linkedin.svg';
import empresa_microsoft from '../../../assets/Home/assetsHome/empresa_microsoft.svg';
import empresa_samsung from '../../../assets/Home/assetsHome/empresa_samsung.svg';
import empresa_tesla from '../../../assets/Home/assetsHome/empresa_tesla.svg';
import gear from '../../../assets/Home/assetsHome/gear.png';
import briefcase from '../../../assets/Home/assetsHome/suitcase.png';
import users_main from '../../../assets/Home/assetsHome/customer.png';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import './MainHome.css'

const images = [
    {
      url: 'https://i.postimg.cc/hjbW7dcc/perfil-empresa.jpg',
      title: 'Empresa',
      width: '50%',
    },
    {
      url: 'https://i.postimg.cc/FFM0q7Lg/perfil-desarrollador.jpg',
      title: 'Desarrollador',
      width: '50%',
    },
  ];
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 600,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
  
  export default function ButtonBases() {
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        
          <ImageButton
            focusRipple
            key={images[0].title}
            style={{
              width: images[0].width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${images[0].url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Link className="link-buttons" to="/registro/empresa">
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                >
                    {images[0].title}
                    <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Link>  
            </Image>
          </ImageButton>
          <ImageButton
            focusRipple
            key={images[1].title}
            style={{
              width: images[1].width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${images[1].url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Link className="link-buttons" to="/registro/desarrollador">
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                >
                    {images[1].title}
                    <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Link>  
            </Image>
          </ImageButton>
        
      </Box>
    );
  }

const MainHome = () => {

    return(
        <>
            <main className="main">
                <section className="principal">
                    <ButtonBases /> 
                </section>
                <section className="content">
                    <div className="content-left content-title-1">
                        <h2 className="content-title ">¿Cómo funcionamos?</h2>
                        <p className="content-text">Te ayudamos a encontrar el candidato ideal para tu empresa a traves de un proceso de seleccion de candidatos con perfil orientado a desarrollo de software podrás visualizar los perfiles de diferentes desarrolladores de software.</p>
                    </div>
                    <div className="content-rigth content-title-2">
                        <h2 className="content-title ">Desarrollador Junior</h2>
                        <p className="content-text">Si buscas iniciar tu primera experiencia laboral en el desarrollo de software o cuentas con una experiencia menor a 2 años, podrás conectarte con reconocidas empresas del rubro con las que podrás entrar en contacto.</p>
                    </div>
                </section>

                <section className="home-about-us">
                    <h2 className="about-title">¿Quiénes somos?</h2>
                    <p className="about-text">Somos una joven empresa Peruana que busca potenciar la industria tecnologica, desafiando la actual manera de contratacion de talentos tecnologicos.</p>
                    <p className="about-text">En tan solo 5 dias entregamos una terna de perfiles para que se incorporen a su equipo, y por los 3 primeros meses, este desarrollador estara en prueba.</p>
                    <p className="about-text">Nos importa que las cosas pasen con una mirada centrada en resultados, mas que en horarios y lugares fisicos, por lo que apostamos por trabajar 100% remoto y asi tambien, incentivar a nuestros clientes, a que sus contrataciones sigan en la misma linea.</p>
                </section>
               
                <section className="homepage-container">
                    <h2 className="homepage-title">DevJuniors no es una pagina de empleo tipica</h2>
                    <h3 className="homepage-title-2">¿Porque DevJuniors?</h3>
                    <div className="homepage-card-wrapper">
                      <div className="homepage-card-container">
                        <div className="homepage-img-container"><img src={gear} alt="insercion laboral" /></div>
                        <div className="homepage-card-divider">
                          <h4 className="homepage-card-title">90% de insercion laboral</h4>
                          <p className="homepage-card-text">90% de nuestros desarrolladores consiguieron trabajo a los 3 meses de haberse creado su perfil.</p>
                        </div>   
                      </div>
                      <div className="homepage-card-container">
                        <div className="homepage-img-container"><img src={briefcase} alt="empresas reconocidad a nivel global" /></div>
                        <div className="homepage-card-divider">
                          <h4 className="homepage-card-title">Reconocidas empresas</h4>
                          <p className="homepage-card-text">Conectar con importantes empresas del rubro y que se encuentran en mas de 16 paises.</p>
                        </div>
                      </div>
                      <div className="homepage-card-container">
                        <div className="homepage-img-container"><img src={users_main} alt="comunidad internacional" /></div>
                        <div className="homepage-card-divider">
                          <h4 className="homepage-card-title">Comunidad internacional</h4>
                          <p className="homepage-card-text">Forma parte de la comunidad Internacional de DevJuniors. Conoce e interactúa con profesionales de más de 16 países</p>
                        </div>
                      </div>
                    </div>
                    
                </section>

                <section className="testimonials">
                  <div className="home-diferenciales">
                      <h2 className="diferenciales-title">Diferenciales</h2>
                      <div className="home-list-1">
                        <ul className="diferenciales-list">
                          <li className="diferenciales-item">Modalidad de contratacion 100% remoto.</li>
                          <li className="diferenciales-item">Perfiles seleccionados de una base de datos.</li>
                          <li className="diferenciales-item">Oportunidad de conseguir tu primera experiencia laboral.</li>
                          <li className="diferenciales-item">Seguimiento y asesoria a los desarrolladores.</li>
                          <li className="diferenciales-item">Contratacion de personal en todos los paises disponibles.</li>
                        </ul>
                      </div>
                  </div>
                  <div className="testimonials-home-container">
                    <h2>Testimonios</h2>
                    <p>¿Que dicen de nosotros?</p>
                    <div className="card-containers">
                            <Carousel className="carrousel-box">  
                            <div className="card-carrousels" id="card-carrousel-1">
                                <div className="cards" id="card-1">
                                    <p className="card-star">★★★★★</p>
                                    <img className="cards-img" src={perfil1} alt="perfil 1" />
                                    <p className="card-text-1">"DevJuniors me ayudo a conseguir mi primer trabajo en el mundo de tecnologia y poder crecer profesionalmente"</p>
                                    <p className="card-user">Sebastian Gerardo</p>
                                    <p className="card-text">CEO empresa 1</p>
                                </div>
                            </div>
                            <div className="card-carrousels" id="card-carrousel-2">
                                <div className="cards" id="card-2">
                                    <p className="card-star">★★★★★</p>
                                    <img className="cards-img" src={perfil2} alt="perfil 2" />
                                    <p className="card-text-1">"DevJuniors me ayudo a conseguir mi primer trabajo en el mundo de tecnologia y poder crecer profesionalmente"</p>
                                    <p className="card-user">Sebastian Bañagasta</p>
                                    <p className="card-text">CTO empresa 2</p>
                                </div>
                            </div>
                            <div className="card-carrousels" id="card-carrousel-3">
                                        <div className="cards" id="card-3">
                                            <p className="card-star">★★★★★</p>
                                            <img className="cards-img" src={perfil3} alt="perfil 3" />
                                            <p className="card-text-1">"DevJuniors me ayudo a conseguir mi primer trabajo en el mundo de tecnologia y poder crecer profesionalmente"</p>
                                            <p className="card-user">Fernando Hervias</p>
                                            <p className="card-text">CEO y fundador empresa 3</p>
                                        </div>
                            </div>
                            </Carousel>
                        
                    </div>
                  </div>
                </section>
                <section className="partners-container">
                    <div className="partners-wrapper">
                      <div className="partners-text-container">
                        <h2>Hiring partners</h2>
                        <h3>Grandes empresas contratan DevJuniors</h3>
                        <p>Conoce algunas de las empresas que tenemos convenios y contratan a nuestros desarrolladores.</p>
                      </div>
                      <div className="partners-img-container" >
                        <div className="img-container-1">
                          <div><img src={empresa_fb} alt="facebook" /></div>
                          <div><img src={empresa_cisco} alt="Cisco" /></div>
                          <div><img src={empresa_tesla} alt="Tesla" /></div>
                          <div><img src={empresa_linkedin} alt="LinkedIn" /></div>
                        </div>
                        <div className="img-container-1">
                          <div><img src={empresa_google} alt="Google" /></div>
                          <div><img src={empresa_samsung} alt="Samsung" /></div>
                          <div><img src={empresa_apple} alt="Apple" /></div>
                          <div><img src={empresa_github} alt="Github" /></div>
                        </div>
                        <div className="img-container-1">
                          <div><img src={empresa_discord} alt="Discord" /></div>
                          <div><img src={empresa_ibm} alt="IBM" /></div>
                          <div><img src={empresa_microsoft} alt="Microsoft" /></div>
                          <div><img src={empresa_dell} alt="Dell" /></div>
                        </div>
                      </div>
                    </div>
                </section>
                <section className="home-contacto">
                    <h2>Contacto</h2>
                    <div className="contact-wrapper">
                        <div className="contact-text-container">
                          <form className="contact__form" action="/">
                              <div className="contact__inputs--1">
                                  <label htmlFor="fname" className="contact__label--1">
                                      <input type="text" id="fname" name="fname"  className="contact-name" placeholder="Nombre" autoComplete="name" required />
                                  </label>
                                  <label htmlFor="femail" className="contact__label--2">
                                      <input type="email" id="femail" name="femail" className="contact-email" placeholder="Correo Electronico" autoComplete="email" required />
                                  </label>
                              </div>
                              <div className="contact__inputs--2">
                                  <label htmlFor="fbusiness" className="contact__label--3">
                                      <input type="text" id="fbusiness" name="fbusiness"  className="contact-business" placeholder="Empresa" autoComplete="on" required />
                                  </label>
                                  <label htmlFor="ftelefono" className="contact__label--4">
                                      <input type="tel" id="ftelefono" name="ftelefono" className="contact-telephone" placeholder="Telefono o celular" autoComplete="on" required />
                                  </label>
                              </div>
                              <label htmlFor="area" className="contact__textarea--label"></label>
                              <textarea className="text-area" name="area" id="area" cols="30" rows="10" placeholder="Mensaje" required></textarea>
                              <div className="contact__btn--container">
                                  <button className="contact__btn--submit" type="submit">ENVIAR</button>
                              </div>
                          </form>
                        </div>
                        {/*
                        <div className="contact-container">
                              <p><strong>Direccion:</strong> Calle Algun Lugar XYZ, Chiclayo</p>
                              <p><strong>Telefono:</strong> 01 - 555 4444</p>
                              <p><strong>email: </strong> contacto@devjuniors.com</p>
                         </div>*/}
                    </div>
                </section>
            </main>
        </>
    )
}

export {MainHome};