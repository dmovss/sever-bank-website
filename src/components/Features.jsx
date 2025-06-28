import React from 'react';

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-blue-500/10"
          style={{
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
}