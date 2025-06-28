// src/components/Card3D.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Card() {
  const meshRef = useRef();
  const frontTexture = useTexture('/card-front.png');
  const backTexture = useTexture('/card-back.png');
  const materialRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Parallax effect based on mouse position
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x, 
        -state.mouse.y * 0.2, 
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y, 
        state.mouse.x * 0.2, 
        0.1
      );
    }
    
    // Metallic effect animation
    if (materialRef.current) {
      materialRef.current.metalness = 0.8 + Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.1, 0.2, 0]}>
      <boxGeometry args={[3.4, 2.1, 0.05]} />
      <meshStandardMaterial 
        ref={materialRef}
        attach="material-0" 
        map={frontTexture} 
        metalness={0.8}
        roughness={0.2}
      />
      <meshStandardMaterial 
        attach="material-1" 
        map={backTexture}
        metalness={0.8}
        roughness={0.2}
      />
      <meshStandardMaterial 
        color="#0f172a" 
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function Card3D() {
  return (
    <div className="w-full h-[400px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.2} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <Environment preset="city" />
        
        <Card />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}