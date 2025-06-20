import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingIconProps {
  position: [number, number, number];
  color: string;
  speed: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ position, color, speed }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <dodecahedronGeometry args={[0.5]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
};

const AnimatedSphere: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial 
        color="#3b82f6" 
        metalness={0.9} 
        roughness={0.1}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

interface ThreeSceneProps {
  showText?: boolean;
  text?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ showText = false, text = "PORTFOLIO" }) => {
  const icons = useMemo(() => [
    { position: [-2, 1, 0] as [number, number, number], color: "#3b82f6", speed: 1.2 },
    { position: [2, -1, 0] as [number, number, number], color: "#8b5cf6", speed: 0.8 },
    { position: [0, 2, -1] as [number, number, number], color: "#06b6d4", speed: 1.5 },
    { position: [-1.5, -2, 1] as [number, number, number], color: "#10b981", speed: 1.0 },
    { position: [1.5, 0.5, -2] as [number, number, number], color: "#f59e0b", speed: 0.9 },
  ], []);

  const spheres = useMemo(() => [
    { position: [-3, 0, -2] as [number, number, number] },
    { position: [3, 1, -1] as [number, number, number] },
    { position: [0, -3, 1] as [number, number, number] },
  ], []);

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      {icons.map((icon, index) => (
        <FloatingIcon
          key={index}
          position={icon.position}
          color={icon.color}
          speed={icon.speed}
        />
      ))}
      
      {spheres.map((sphere, index) => (
        <AnimatedSphere key={index} position={sphere.position} />
      ))}
      
      {showText && (
        <Center>
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={0.5}
              height={0.1}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              {text}
              <meshStandardMaterial 
                color="#ffffff" 
                metalness={0.8} 
                roughness={0.2}
              />
            </Text3D>
          </Float>
        </Center>
      )}
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default ThreeScene;