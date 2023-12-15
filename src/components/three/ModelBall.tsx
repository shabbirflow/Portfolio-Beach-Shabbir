import { useEffect, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
// import { GLTF } from "three/examples/jsm/Addons.js";
// import { Gltf } from "@react-three/drei";
import { Float, Decal } from "@react-three/drei";
// interface IGLTF extends Gltf {
//   nodes: { [key: string]: THREE.Mesh };
//   materials: { [key: string]: THREE.MeshStandardMaterial };
// }

export function ModelBall({ imgUrl }: { imgUrl: string }) {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // flatShading
        />
      </mesh>
    </Float>
  );
}
