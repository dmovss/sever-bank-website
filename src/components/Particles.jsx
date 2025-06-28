import React from 'react';
import Particles from 'react-tsparticles';

export default function ParticleBackground() {
  return (
    <Particles
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#6366f1", "#8b5cf6", "#a855f7"],
          },
          opacity: {
            value: 0.15,
            random: true,
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out",
          },
          links: {
            enable: true,
            distance: 120,
            color: "#4f46e5",
            opacity: 0.05,
            width: 1,
          },
          shape: {
            type: "circle",
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.2,
              },
            },
            push: {
              quantity: 3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}