import { Suspense, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Color } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import CanvasLoader from "./CanvasLoader";

// X-Axis: Left and right
// Y-Axis: Up and down
// Z-Axis: Forward and backward

interface IGLTF extends GLTF {
  nodes: { [key: string]: THREE.Mesh };
  materials: { [key: string]: THREE.MeshStandardMaterial };
}

const NeonModel = () => {
  const neon = useGLTF("/hehe/technical_difficulties/scene.gltf");

  useEffect(() => {
    const nodeToHide =
      neon.nodes[
        "small-polka-dot-seamless-pattern-background-retro-vintage-vecto_119"
      ];
    // Set the visibility of the node
    if (nodeToHide) {
      nodeToHide.visible = false;
    }
    return () => {};
  }, [neon]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={neon.scene}
        //   scale={isMobile ? 0.7 : 0.75}
        //   position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        position={[0, 0, 0.09]}
        scale={0.05}
        rotation={[0, -1.6, 0.4]}
      />
    </mesh>
  );
};

export default function NeonCanvas() {
  // return <></>;
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1, 1] }}
      className="z-10 cursor-pointer"
    >
      <Suspense fallback={<CanvasLoader />}>
        <Environment files="/models/forest_slope_1k.hdr" />
        <NeonModel />
        <ContactShadows position={[0, 0, 0]} color="#ffffff" />
        <OrbitControls
          maxPolarAngle={Math.PI / 4}
          minPolarAngle={0}
          maxAzimuthAngle={Math.PI / 16}
          minAzimuthAngle={-Math.PI / 16}
          // onUpdate={(self) => {
          //     const azimuthalAngle = self.getAzimuthalAngle();
          //     if (
          //       azimuthalAngle >= self.maxAzimuthAngle - 0.01 ||
          //       azimuthalAngle <= self.minAzimuthAngle + 0.01
          //     ) {
          //         console.log("CAME HERE");
          //       self.autoRotateSpeed = self.autoRotateSpeed * -1;
          //     }
          //   }}
          autoRotate
          enableZoom={false}
        />
      </Suspense>
    </Canvas>
  );
}
