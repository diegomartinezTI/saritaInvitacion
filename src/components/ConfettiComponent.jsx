import React from "react";
import Particles from "react-tsparticles";

const ConfettiComponent = ({ showConfetti }) => {
  if (!showConfetti) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 200, // Más partículas
          },
          color: {
            value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"], // Colores brillantes
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 15, // Partículas más grandes
            random: true,
          },
          move: {
            speed: 10, // Mayor velocidad de caída
            direction: "bottom",
            outMode: "out",
          },
          opacity: {
            value: 0.8,
          },
          line_linked: {
            enable: false, // Deshabilitar líneas entre partículas
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
            },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed", // Fijo para que siempre esté visible
        top: 0,
        left: 0,
        width: "100vw", // Abarca todo el ancho de la ventana
        height: "100vh", // Abarca todo el alto de la ventana
        zIndex: 9999, // Muy alto para estar por encima de todo
        pointerEvents: "none", // Evitar que interfiera con clics
      }}
    />
  );
};

export default ConfettiComponent;
