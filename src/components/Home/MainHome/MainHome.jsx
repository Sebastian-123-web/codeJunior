import React from "react";
import perfil1 from '../../../assets/Home/assetsHome/perfil-1.jpg';
import perfil2 from '../../../assets/Home/assetsHome/perfil-22.jpg';
import perfil3 from '../../../assets/Home/assetsHome/perfil-3.jpg';
import desarrollador from '../../../assets/Home/assetsHome/desarrollador.svg';
import empresa from '../../../assets/Home/assetsHome/empresa.svg';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
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
              <Link className="link-buttons" to="/formEmp">
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
              <Link className="link-buttons" to="/formDev">
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

                    {/*<div className="img-container">
                        <img src={empresa} alt="perfil de empresa" />
                        <button className="btn-1-principal">Empresa</button>
                    </div>
                    
                    <div className="img-container">
                        <img src={desarrollador} alt="perfil de desarrollador" />
                        <button className="btn-2-principal">Desarrollador</button>
                    </div>*/}
                    
                </section>
                <section className="content">
                    <div className="content-left content-title-1">
                        <h2 className="content-title ">Como funcionamos?</h2>
                        <p className="content-text">Te ayudamos a encontrar el candidato ideal para tu empresa a traves de un proceso de seleccion de candidatos con perfil orientado a desarrollo de software podras visualizar los perfiles de diferentes desarrolladores de software.</p>
                    </div>
                    <div className="content-rigth content-title-2">
                        <h2 className="content-title ">Desarrollador Junior</h2>
                        <p className="content-text">Si buscas iniciar tu primera experiencia laboral en el desarrollo de software o cuentas con una experiencia menor a 2 años, podras conectarte con reconocidas empresas del rubro con la que podras entrar en contacto.</p>
                    </div>
                </section>
                <section className="home-about-us">
                    <h2 className="about-title">Acerca de</h2>
                    <p className="about-text">Somos una joven empresa Peruana que busca potenciar la industria tecnologica, desafiando la actual manera de contratacion de talentos tecnologicos.</p>
                    <p className="about-text">En tan solo 5 dias entregamos una terna de perfiles para que se incorporen a su equipo, y por los 3 primeros meses, este desarrollador estara en prueba.</p>
                    <p className="about-text">Nos importa que las cosas pasen con una mirada centrada en resultados, mas que en horarios y lugares fisicos, por lo que apostamos por trabajar 100% remoto y asi tambien, incentivar a nuestros clientes, a que sus contrataciones sigan en la misma linea.</p>
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
                            <Carousel>  
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



                                    {/*<div className="card-carrousels" id="card-carrousel-1">
                                        <div className="cards" id="card-1">
                                            <p className="card-star">★★★★★</p>
                                            <img className="cards-img" src={perfil1} alt="perfil 1" />
                                            <p className="card-text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, est.</p>
                                            <p className="card-user">user-1</p>
                                            <p className="card-text">CEO empresa 1</p>
                                        </div>
                                    </div>

                                    <div className="card-carrousels" id="card-carrousel-2">
                                        <div className="cards" id="card-2">
                                            <p className="card-star">★★★★★</p>
                                            <img className="cards-img" src={perfil2} alt="perfil 2" />
                                            <p className="card-text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, est.</p>
                                            <p className="card-user">user-2</p>
                                            <p className="card-text">CTO empresa 2</p>
                                        </div>
                                    </div>
                                
                                    <div className="card-carrousels" id="card-carrousel-3">
                                        <div className="cards" id="card-3">
                                            <p className="card-star">★★★★★</p>
                                            <img className="cards-img" src={perfil3} alt="perfil 3" />
                                            <p className="card-text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, est.</p>
                                            <p className="card-user">user-3</p>
                                            <p className="card-text">CEO y fundador empresa 3</p>
                                        </div>
                                     </div>   */}
                        
                    </div>
                  </div>
                </section>
                <section className="home-contacto">
                    <h2>Contacto</h2>
                    <div className="contact-wrapper">
                        
                        <div className="map-container">
                            <iframe className="iframe-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63390.89404368884!2d-79.86765562304934!3d-6.778267495100513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef2c56f229ad%3A0x9ef53152a0c6b9d!2sReal%20Plaza%20Chiclayo.!5e0!3m2!1ses!2spe!4v1676073447675!5m2!1ses!2spe" width="700" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className="contact-container">
                              <p><strong>Direccion:</strong> Cale Algun Lugar XYZ, Chiclayo</p>
                              <p><strong>Telefono:</strong> 01 - 555 4444</p>
                              <p><strong>email: </strong> contacto@devjuniors.com</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export {MainHome};