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
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
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
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Link>  
              
            </Image>
          </ImageButton>
        ))}
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
                <section className="testimonials">
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
                </section>
            </main>
        </>
    )
}

export {MainHome};