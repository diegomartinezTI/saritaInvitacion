import React,{useState} from 'react';
import './Home.css'; 
import { Box, Grid, Typography, useMediaQuery,Button,TextField } from '@mui/material';
import Slider from "react-slick"; 
import DayCounter from './DayCounter';
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import imagenFondo from "../assets/29f4e7b25050efa9e18377d17e356be1-removebg-preview.png"
import esquina1 from "../assets/esquina1.png"
import esquina2 from "../assets/esquina.png"
import esquina3 from "../assets/esquinainfizq.png"
import esquina4 from "../assets/esquina4.png" 
import axios from 'axios';
import sarita2 from '../assets/sarita2.png'
import sarita1 from '../assets/sarita1.png'
import quinceanera from '../assets/quinceanera.png'
import Modal from '@mui/material/Modal'; 
import Confetti from 'react-confetti';

const Invitacion = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const handleChange = (event) => {
    setInputValue(event.target.value); // Actualiza el estado con el nuevo valor del input
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
//641 * 1366
//953*1920 

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const family = queryParams.get('family');
  const handlePostRequest = async (event) => { 
      event.preventDefault(); 
      // Datos que se enviarán en la solicitud POST
      const data = {
        "familia": family,
        "telefono": inputValue
      };

      // Enviar la solicitud POST
      axios.post('https://misquince-sarita.site/api/confirmations/', data)
      .then(response => { 
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 10000); // Confetti dura 3 segundos
        console.timeEnd("LAMBDA.................",response)
        //decode64ToStream(response.data.base64);
        
      })
      .catch(error => { 
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 10000); // Confetti dura 3 segundos
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
    >
      <div>
        {showConfetti && <Confetti style={{"z-index":"1000000"}}/>}
      </div>
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
                <Typography>Sábado 1 de Marzo de 2025 a las 4:00 p.m.</Typography>
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
            <Button style={{background:"#8b0404"}} onClick={handleOpen} variant="contained">
                    Confirmar Asistencia
                  </Button>
            </Box>
            <Box sx={{width:"100%" }}> {/* Espacio entre el slider y el botón */}
              <DayCounter></DayCounter>
            </Box>
          
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h9" component="h9">
              Compartenos un número de teléfono por si tenemos algún cambio poder avisarte.
            </Typography>
            <Box style={{marginTop:"10px"}}>
              <Box><TextField id="outlined-basic" label="Teléfono" placeholder='7228986114' variant="outlined" value={inputValue}  onChange={handleChange}/></Box>
              <Button style={{background:"#8b0404",marginTop:"10px"}} onClick={handlePostRequest} variant="contained">
                    Confirmar
                  </Button>
            </Box>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Te estaré esperando para disfrutar en compañia de las personas más importantes en mi vida.
            </Typography>
          </Box>
        </Modal>
    </Box>
  );
};

export default Invitacion;
