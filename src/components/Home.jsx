import './Home.css'; 
import { Box, Button, Typography } from '@mui/material'; 
import ImageSlider from './ImageSlider';
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import imagenFondo from "../assets/29f4e7b25050efa9e18377d17e356be1-removebg-preview.png"
import esquina2 from "../assets/esquina.png"
import esquina3 from "../assets/esquinainfizq.png"
import globos from "../assets/globos.png"
function HomePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const family = queryParams.get('family');
  return (
    <div className="App">
      <Box  className="margen">
        <Box className="container">
          <Box className="izquierda"> 
            <img src={globos} className='globos'></img>
            <Box style={{marginTop:"30px"}}>
              <img src={imagenFondo} alt='' className='bg-image'></img>
            </Box>
            <Box className="left-txts">
              <Box className="textoQuince">Mis XV </Box>  
              <Box className="nombreSara">Sara E. Martínez Ojeda</Box> 
              <Box  className="texto">
                Hay momentos en la vida que imaginamos, soñamos y esperamos, mi momento ha llegado y lo quiero compartir con ustedes, familia: 
                <Typography variant='h4'style={{marginTop:"20px"}}>{family}</Typography>
              </Box>
              <Box className="lugar-evento">
                <Typography>Lugar del evento:</Typography>
                <a href='https://maps.app.goo.gl/i2jtqN7zFz5Ztqh57' target='_blank'>
                  <Typography>Herencia Mexicana - Salón Jardín </Typography> 
                  <Typography>Privada Progreso # 35 San Pedro Totoltepec, Toluca, Mexico</Typography>
                </a>
              </Box>
              <img src={esquina3} alt='' className='esquina-inf-izq'></img>
            </Box> 
          </Box> 
          <Box className="derecha">
            <img src={esquina2} className='esqui-sup-der'></img>
            <Box className="slider">
              <ImageSlider />
            </Box>
            <Box>
                <Button style={{background:"#8b0404"}} variant="contained">
                  Confirmar Asistencia
                </Button>
              </Box>
          </Box>
        </Box>
        
      </Box>
    </div>
  );
}

export default HomePage;
