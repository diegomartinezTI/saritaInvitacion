import React,{useState} from 'react';
import './Home.css'; 
import { Box, Grid, Typography, useMediaQuery,Button } from '@mui/material';
import Slider from "react-slick";
import ImageSlider from './ImageSlider';
import DayCounter from './DayCounter';
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import imagenFondo from "../assets/29f4e7b25050efa9e18377d17e356be1-removebg-preview.png"
import esquina1 from "../assets/esquina1.png"
import esquina2 from "../assets/esquina.png"
import esquina3 from "../assets/esquinainfizq.png"
import esquina4 from "../assets/esquina4.png"
import globos from "../assets/globos.png"
import axios from 'axios';
import sarita2 from '../assets/sarita2.png'
import sarita1 from '../assets/sarita1.png'
import quinceanera from '../assets/quinceanera.png'
import Particles from "react-tsparticles";
import ConfettiComponent from "./ConfettiComponent";


const Invitacion = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
//641 * 1366
//953*1920
  console.log("ancho = ",windowSize)

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const family = queryParams.get('family');
  const handlePostRequest = async () => { 
 
 
      // Datos que se enviarán en la solicitud POST
      const data = {
        "familia": family,
        "telefono": "123213"
      };

      // Enviar la solicitud POST
      axios.post('http://127.0.0.1:8000/api/confirmations/', data)
      .then(response => {
        
        console.timeEnd("LAMBDA.................",response)
        //decode64ToStream(response.data.base64);
        
      })
      .catch(error => {
        console.error('Error en la petición:', error);
      });
 
  };


  const handleClick = () => {
    setShowConfetti(true);

    // Detener el confeti después de 5 segundos
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  };
  
   // Configuración del slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: isMobile ? 'auto' : '100vh', // Ajustar la altura en móviles para permitir scroll
        overflowY: isMobile ? 'auto' : 'hidden', // Permitir scroll vertical solo en móviles
        padding:"15px"
      }}
    ><ConfettiComponent showConfetti={showConfetti} />
      <Grid
        container
        spacing={0} // Eliminar el espacio entre columnas
        sx={{
          flexDirection: isMobile ? 'column' : 'row', // Cambiar a columna en móviles
        }}
        style={{border:" 5px solid rgb(139, 4, 4)",borderRadius:"1%"}}
      >
        <Grid
          item
          xs={12} // En móviles ocupa el 100% del ancho
          sm={6}  // En pantallas grandes ocupa el 50% del ancho
          sx={{
            backgroundColor: '#fff',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column', // Alinear elementos verticalmente
            justifyContent: 'flex-start', // Mantener el contenido alineado al principio
            alignItems: 'center', // Centrar todo el contenido horizontalmente
          }}
        >
          <img src={esquina2} className='esqui-sup-der'></img>
          <img src={esquina1} className='esqui-sup-izq'></img>
          {/* Imagen centrada dentro de la columna izquierda */}
          <Box
            component="img"
            src={imagenFondo} // Cambia la URL de la imagen
            alt="XV Años"
            sx={{
              height: '200px',
              width: 'auto',
            }}
          />
          {/* Texto centrado */}
          <Box sx={{ textAlign: 'center' }}>
            <Box className="textoQuince">Mis XV </Box> 
            <Box className="nombreSara">Sara E. Martínez Ojeda</Box> 
              <Box  className="texto">
                Hay momentos en la vida que imaginamos, soñamos y esperamos, mi momento ha llegado y lo quiero compartir con ustedes, familia: 
                <Typography style={{marginTop:"45px",fontWeight:"bold"}}>{family}</Typography>
              </Box>
              <Box className="lugar-evento">
                <Typography>Lugar del evento:</Typography>
                <a href='https://maps.app.goo.gl/i2jtqN7zFz5Ztqh57' target='_blank'>
                  <Typography>Herencia Mexicana - Salón Jardín </Typography> 
                  <Typography>Privada Progreso # 35 San Pedro Totoltepec, Toluca, Mexico</Typography>
                </a>
              </Box>
          </Box>
          <img src={esquina3} alt='' className='esquina-inf-izq'></img>
          <img src={esquina4} alt='' className='esquina-inf-der'></img>
        </Grid>
        {/* Columna Derecha con Slider */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            backgroundColor: '#fff',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // Alineado al borde superior
            alignItems: 'center', // Centrar horizontalmente
          }}
        >
          {/* Slider de imágenes */}
          <Box
            sx={{
              width: '35%', // Ajustar el slider al 70% del contenedor
              marginTop: 0, // Quitar márgenes superiores para pegar al borde de arriba
            }}
          >
            <Slider {...sliderSettings}>
              <Box>
                <img
                  src={sarita1}
                  alt="Imagen 1"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
              <Box>
                <img
                  src={sarita2}
                  alt="Imagen 2"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
              <Box>
                <img
                  src={quinceanera}
                  alt="Imagen 3"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
            </Slider>
          </Box>
           {/* Botón centrado debajo del slider */}
           <Box sx={{ marginTop: '20px' }}> {/* Espacio entre el slider y el botón */}
            <Button style={{background:"#8b0404"}} onClick={handlePostRequest} variant="contained">
                    Confirmar Asistencia
                  </Button>
            </Box>
            <Box sx={{width:"100%" }}> {/* Espacio entre el slider y el botón */}
              <DayCounter></DayCounter>
            </Box>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default Invitacion;
