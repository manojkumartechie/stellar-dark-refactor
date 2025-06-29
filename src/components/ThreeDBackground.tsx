import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Animated particles component
const AnimatedParticles = ({ count = 1000 }) => {
  const mesh = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Points ref={mesh} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

// Floating spheres component
const FloatingSpheres = () => {
  const spheres = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      ],
      scale: Math.random() * 0.5 + 0.5,
      speed: Math.random() * 0.5 + 0.5
    }));
  }, []);

  return (
    <>
      {spheres.map((sphere, i) => (
        <FloatingSphere key={i} {...sphere} />
      ))}
    </>
  );
};

const FloatingSphere = ({ position, scale, speed }: any) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 2;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.5;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={mesh} args={[scale, 32, 32]} position={position as [number, number, number]}>
      <MeshDistortMaterial
        color="#6366f1"
        speed={2}
        distort={0.3}
        radius={1}
        transparent
        opacity={0.3}
      />
    </Sphere>
  );
};

// Interactive grid component
const InteractiveGrid = () => {
  const gridRef = useRef<THREE.Grid>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.1) % 1;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[20, 20, '#3b82f6', '#1e40af']}
      position={[0, -5, 0]}
    />
  );
};

// Camera controller
const CameraController = () => {
  const { camera } = useThree();

  useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 3;
    camera.position.z = Math.cos(state.clock.elapsedTime * 0.1) * 3;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

// Main 3D background component
const ThreeDBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #334155)' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
        
        {/* Camera controller */}
        <CameraController />
        
        {/* Animated particles */}
        <AnimatedParticles count={1500} />
        
        {/* Floating spheres */}
        <FloatingSpheres />
        
        {/* Interactive grid */}
        <InteractiveGrid />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground; 