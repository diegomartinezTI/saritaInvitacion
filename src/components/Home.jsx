import './Home.css'; 
import { Box, Button, Typography } from '@mui/material'; 
import ImageSlider from './ImageSlider';
import DayCounter from './DayCounter';
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import imagenFondo from "../assets/29f4e7b25050efa9e18377d17e356be1-removebg-preview.png"
import esquina2 from "../assets/esquina.png"
import esquina3 from "../assets/esquinainfizq.png"
import globos from "../assets/globos.png"
import axios from 'axios';
function HomePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const family = queryParams.get('family');
  const handlePostRequest = async () => {
    try {
      const token = 'eyJraWQiOiJtOXlFWlhJOXk1b3NaeVd5WVZoSHZoOFczWWR4MHNtenIraTExN2FUN0FZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2NjFkOTEwZC1lZmY5LTQ1YjItOWM1Ny0xNzA4N2NlOWE5MzEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfRHJFbTFyZ1lqIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImRpZWdvbWFydGluZXoiLCJsb2NhbGUiOiJNeCIsIm1pZGRsZV9uYW1lIjoiTWFydGluZXoiLCJvcmlnaW5fanRpIjoiZTNhMjEzOWQtNmFmYS00ZTg1LWE0MDQtMzg0ZDczYzk2OWEwIiwiYXVkIjoiM3Rja3I3ZjIxb201YmVqbTAyOWtlM2NlOGYiLCJldmVudF9pZCI6ImUzMmNiYTM2LWUzZDMtNGYyZC04Nzc1LTFmMTcxYTA5NDNkYiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzI5MTgyNjA5LCJuYW1lIjoiRGllZ28iLCJwaG9uZV9udW1iZXIiOiIrNTI3MjI4OTg2MTEzIiwiZXhwIjoxNzI5MTg2MjA5LCJpYXQiOjE3MjkxODI2MDksImp0aSI6IjRlMGIwZDI5LThlM2MtNDJkMy04MzJlLTY3ZDUzODI5NmI3YiIsImVtYWlsIjoiZGllZ28ubWFydGluZXpAY29ydXNjb25zdWx0aW5nLmNvbSJ9.S-dwdwL_4a31tSDYElvRrJzDHhqB23zTFcXYXKnhgviaR9fm98NJQBcx7qpmCgiIBKv8_uZw9-i2yK3HA66tknAD5iMFsXA83i5vqvGCRp2R0CaBURn48P2Qwhp32DoEl3rWcx5VS09KlJc5vsZTswXlk5INois5S1k0oxFEXoB3_AuIAjbr3t8EHCe3sfj_GH8anbpVHYgU7jMt6bE_ayuFa89LldMxpFlMzJV3yxL-TPEVLem2F3acHPrYpVR9BK93LFfqsBBAdOmr5LWGih4Gy_HfjoGRmYzKgqoKQ2KxrvbVtdq6WQncNV8UljwmSatPsTmc_tz9yb3n7xoo5A';  // Reemplaza con tu token de autorización

      // Datos que se enviarán en la solicitud POST
      const data = {
        "familia": "xxxx",
        "telefono": "123213"
      };

      // Enviar la solicitud POST
      axios.post('http://127.0.0.1:8000/api/confirmations/', data)
      .then(response => {
        
        console.timeEnd("LAMBDA.................")
        //decode64ToStream(response.data.base64);
        
      })
      .catch(error => {
        console.error('Error en la petición:', error);
      });
      //alert('Datos guardados correctamente');
    } catch (error) {
      // Manejar errores
      console.error('Hubo un error al guardar los datos:', error);
      //alert('Error al guardar los datos');
    }
  };
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
                
                <Button style={{background:"#8b0404"}} onClick={handlePostRequest} variant="contained">
                  Confirmar Asistencia
                </Button>
              </Box>
            <Box style={{marginLeft: "60px"}}><DayCounter></DayCounter></Box>
          </Box>
        </Box>
        
      </Box>
    </div>
  );
}

export default HomePage;
