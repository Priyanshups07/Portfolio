import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Particles = ({ count = 200 }) => {
  const mesh = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.02;
      mesh.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00e5ff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const FloatingGeo = ({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) => {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      mesh.current.rotation.z = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={position}>
        <icosahedronGeometry args={[0.6, 1]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const TorusRing = () => {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.15;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -2]}>
      <torusGeometry args={[3, 0.02, 16, 100]} />
      <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.5} transparent opacity={0.4} />
    </mesh>
  );
};

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00e5ff" />
      <pointLight position={[-5, -3, 3]} intensity={0.5} color="#a855f7" />

      <FloatingGeo position={[-3, 1.5, 0]} color="#00e5ff" speed={0.8} />
      <FloatingGeo position={[3.5, -1, 1]} color="#a855f7" speed={1.2} />
      <FloatingGeo position={[1, 2.5, -1]} color="#3b82f6" speed={0.6} />
      <FloatingGeo position={[-2, -2, 0.5]} color="#00e5ff" speed={1} />

      <TorusRing />
      <Particles count={300} />
    </Canvas>
  );
};

export default HeroScene;
