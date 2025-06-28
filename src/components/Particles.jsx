import React from 'react';
import Particles from 'react-tsparticles';

export default function ParticleBackground() {
  return (
    <Particles
      className="absolute inset-0 -z-10"
      options={{
        particles: {
          number: { value: 80 },
          color: { value: "#6366f1" },
          opacity: { value: 0.1 },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
          }
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" }
          }
        }
      }}
    />
  );
}