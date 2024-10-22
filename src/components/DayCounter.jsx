import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material'; 

const DayCounter = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    // Función para calcular el tiempo restante
    const calculateTimeRemaining = () => {
      const now = new Date(); // Fecha actual
      const targetDate = new Date('2025-03-01T16:00:00'); // 1 de marzo de 2025 a las 4:00 PM

      const diffTime = targetDate - now; // Diferencia en milisegundos

      if (diffTime > 0) {
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Días restantes
        const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas restantes
        const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60)); // Minutos restantes

        setTimeRemaining({
          days: diffDays,
          hours: diffHours,
          minutes: diffMinutes,
        });
      } else {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
        });
      }
    };

    // Calcular el tiempo restante cada minuto
    const interval = setInterval(calculateTimeRemaining, 1000);
    
    // Limpiar intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return (
    <Box style={{width:"100%"}}>
      <Grid
        container
        style={{padding:"10%"}}
      >
        <Grid
          item
          xs={4} // En móviles ocupa el 100% del ancho
          sm={4}
          className='itemGrid'
        >
          <Box className="sombras">
            <span style={{marginLeft:"-10px"}}className='numbers'>{timeRemaining.days}</span> <br />Días
          </Box> 
        </Grid>
        <Grid
          item
          xs={4} // En móviles ocupa el 100% del ancho
          sm={4}
          className='itemGrid'
        >
          <Box className="sombras">
            <span style={{marginLeft:"-10px"}}className='numbers'>{timeRemaining.hours}</span> <br />Horas
          </Box> 
        </Grid>
        <Grid
          item
          xs={4} // En móviles ocupa el 100% del ancho
          sm={4}
          className='itemGrid'
        >
          <Box className="sombras">
            <span style={{marginLeft:"-10px"}}className='numbers'>{timeRemaining.minutes}</span> <br />Minutos
          </Box> 
        </Grid>

      </Grid>
    </Box>
    // <div style={{marginTop:"20px"}}> 
    //     <Box className="sombras">
    //       <span style={{marginLeft:"-10px"}}className='numbers'>{timeRemaining.days}</span> <br />Días
    //     </Box> 
    //     <Box  className="sombras" style={{marginLeft:"20px"}}>
    //     <span className='numbers'>{timeRemaining.hours}</span> <br /> Horas
    //     </Box> 
    //     <Box  className="sombras" style={{marginLeft:"20px"}}>
    //     <span className='numbers'>{timeRemaining.minutes}</span>  <br />
    //       Minutos
    //     </Box>
    // </div>
  );
};

export default DayCounter;