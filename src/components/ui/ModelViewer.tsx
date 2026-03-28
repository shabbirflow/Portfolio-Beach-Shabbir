"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import CanvasLoader from "../three/CanvasLoader";

interface ModelViewerProps {
  modelPath: string;
  scale?: number;
  rotation?: [number, number, number];
  position?: [number, number, number];
}

const ResponsiveModel = ({ modelPath, baseScale = 1, rotation = [0, 0, 0], position = [0, 0, 0] }: ModelViewerProps & { baseScale?: number }) => {
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef<any>(null);
  const { viewport } = useThree();

  // Calculate dynamic scale based on viewport width (responsive for mobile)
  // Viewport width of 10-15 is typical for desktop with the current camera distance
  // Viewport width of 5-8 is typical for mobile
  const responsiveScale = Math.min(viewport.width / 15, 1) * baseScale;
  
  // Pendulum-style rotation: swings ~140 degrees (±70°)
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const swing = Math.sin(clock.getElapsedTime() * 0.3) * (Math.PI * 70 / 180); // ±70° = 140° total
      groupRef.current.rotation.y = swing;
    }
  });

  return (
    <Center>
      <group ref={groupRef}>
        <primitive object={scene} scale={responsiveScale} rotation={rotation} position={position} />
      </group>
    </Center>
  );
};

const ModelViewer = ({ 
  modelPath, 
  scale = 1,
  rotation = [0, 0, 0],
  position = [0, 0, 0]
}: ModelViewerProps) => {
  return (
    <div className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 8, 30], fov: 40 }}>
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 10, 5]} intensity={1} />
          <ResponsiveModel modelPath={modelPath} baseScale={scale} rotation={rotation} position={position} />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            maxAzimuthAngle={Math.PI / 6}
            minAzimuthAngle={-Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
