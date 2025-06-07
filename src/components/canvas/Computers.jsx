import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader"; // Make sure this doesn't have <div> inside <Canvas>

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  useEffect(() => {
    console.log("GLTF Model Loaded Successfully:", scene);
  }, [scene]);

  return (
    <group>
    <ambientLight intensity={0.5} />
    <spotLight
      position={[-20, 50, 10]}
      angle={0.2}
      penumbra={1}
      intensity={2} // Increased for better contrast
      castShadow
      shadow-mapSize={2048} // Higher resolution for better detail
      color={"#ffbb55"} // Warm glow effect
    />
    {/* <pointLight intensity={1.5} color={"#66ccff"} position={[5, 5, 5]} /> */}
    <pointLight intensity={5} />

  
    <primitive
  object={scene}
  scale={isMobile ? 0.7 : 0.75} // Reduced from 0.8 and 0.85
  position={isMobile ? [0, -2.7, -2] : [0, -2.9, -1.3]} // Slightly adjusted for balance
  rotation={[-0.01, -0.15, -0.05]}
/>

  </group>
  
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log("ComputersCanvas Mounted");

    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    console.log("Initial isMobile:", mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      console.log("Screen size changed, isMobile:", event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      console.log("ComputersCanvas Unmounted");
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
