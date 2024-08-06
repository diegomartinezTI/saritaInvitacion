import '../css/global.css'; 
import { Box, Button } from '@mui/material'; 
import ImageSlider from './ImageSlider';
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const family = queryParams.get('family');
  return (
    <div className="App">
      <Box  className="margen">
        <Box className="container">
          <Box className="izquierda">
            <Box>
              <Box className="textoQuince">Mis XV </Box>  
              <Box className="nombreSara">Sara E. Martínez Ojeda</Box> 
              <Box>
                Hay momentos en la vida que imaginamos, soñamos y esperamos, mi momento ha llegado y lo quiero compartir con ustedes, familia: {family}
              </Box>
            </Box> 
          </Box> 
          <Box className="derecha">
            <ImageSlider />
            <Button color="primary" variant="contained">
              Confirmar Asistencia
            </Button>
          </Box>
        </Box>
        
      </Box>
    </div>
  );
}

export default HomePage;
