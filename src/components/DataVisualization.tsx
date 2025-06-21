import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center, OrbitControls, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

interface DataPointProps {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
}

const DataPoint: React.FC<DataPointProps> = ({ position, color, size, speed }) => {
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
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} transparent opacity={0.8} />
      </mesh>
    </Float>
  );
};

const AnimatedChart: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const bars = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      height: Math.random() * 2 + 0.5,
      position: [i * 0.5 - 1, 0, 0] as [number, number, number],
      color: `hsl(${200 + i * 30}, 70%, 60%)`
    }));
  }, []);

  return (
    <group ref={groupRef} position={position}>
      {bars.map((bar, index) => (
        <Box
          key={index}
          position={[bar.position[0], bar.height / 2, bar.position[2]]}
          args={[0.3, bar.height, 0.3]}
        >
          <meshStandardMaterial color={bar.color} metalness={0.6} roughness={0.3} />
        </Box>
      ))}
    </group>
  );
};

const NetworkNodes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const nodes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 2;
      return {
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.5,
          Math.sin(angle) * radius * 0.3
        ] as [number, number, number],
        color: `hsl(${180 + i * 20}, 60%, 50%)`
      };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <Sphere key={index} position={node.position} args={[0.1, 8, 8]}>
          <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.2} />
        </Sphere>
      ))}
      {/* Connection lines */}
      {nodes.map((node, index) => {
        const nextNode = nodes[(index + 1) % nodes.length];
        const points = [
          new THREE.Vector3(...node.position),
          new THREE.Vector3(...nextNode.position)
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <line key={`line-${index}`} geometry={geometry}>
            <lineBasicMaterial color="#3b82f6" opacity={0.3} transparent />
          </line>
        );
      })}
    </group>
  );
};

const DataVisualization: React.FC = () => {
  const dataPoints = useMemo(() => [
    { position: [-3, 1, -2] as [number, number, number], color: "#3b82f6", size: 0.3, speed: 1.2 },
    { position: [3, -1, 1] as [number, number, number], color: "#8b5cf6", size: 0.4, speed: 0.8 },
    { position: [0, 2, -1] as [number, number, number], color: "#06b6d4", size: 0.2, speed: 1.5 },
    { position: [-2, -2, 2] as [number, number, number], color: "#10b981", size: 0.35, speed: 1.0 },
    { position: [2, 0.5, -3] as [number, number, number], color: "#f59e0b", size: 0.25, speed: 0.9 },
  ], []);

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 75 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <spotLight position={[0, 10, 0]} intensity={0.8} color="#06b6d4" />
      
      {/* Floating Data Points */}
      {dataPoints.map((point, index) => (
        <DataPoint
          key={index}
          position={point.position}
          color={point.color}
          size={point.size}
          speed={point.speed}
        />
      ))}
      
      {/* Animated Chart */}
      <AnimatedChart position={[-4, -1, 0]} />
      
      {/* Network Visualization */}
      <NetworkNodes />
      
      {/* Floating Text */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        <Center position={[0, -3, 0]}>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.3}
            height={0.05}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.01}
            bevelSize={0.01}
            bevelOffset={0}
            bevelSegments={3}
          >
            DATA SCIENCE
            <meshStandardMaterial 
              color="#ffffff" 
              metalness={0.8} 
              roughness={0.2}
              transparent
              opacity={0.8}
            />
          </Text3D>
        </Center>
      </Float>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default DataVisualization;