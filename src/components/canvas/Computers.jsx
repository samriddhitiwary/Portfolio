import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      
      <hemisphereLight intensity={0.5} groundColor="black" />
     
      <directionalLight intensity={1} position={[10, 10, 5]} />
      
      <pointLight intensity={2} position={[0, 5, 0]} />
      
      <primitive object={computer.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
