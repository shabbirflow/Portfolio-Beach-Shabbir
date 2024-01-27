// Import necessary dependencies from React, three.js, and drei (a library for common three.js components)
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { random } from "maath";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import * as daisyuithemes from "daisyui/src/theming/themes";
// Define a functional component named 'Stars' with TypeScript props of an empty object
const Stars = (props: {}) => {
  // Create a reference for a three.js Points object
  const ref = useRef<THREE.Points>(null);

  // Define a state variable 'sphere' using the useState hook
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(280), { radius: 1.5 })
  );

  // Use the useFrame hook to perform animation logic on each frame
  useFrame((state, delta) => {
    // Check if the ref and its current value are not null
    if (ref && ref.current) {
      // Rotate the Points object around the x and y axes based on the time delta
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  
  const context = useContext(ThemeContext);
  if (!context) throw new Error("THEME CONTEXT NOT FOUND");
  const { theme, setTheme } = context;
  const themecolors = daisyuithemes.default[theme as keyof typeof daisyuithemes.default];
  // console.log(themecolors);

  // Return a group element containing a Points component with specified properties
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Points component renders a set of points in 3D space */}
      <Points
        ref={ref}
        positions={sphere as Float32Array}
        stride={3}
        frustumCulled
        {...props}
      >
        {/* PointMaterial defines the appearance of each point */}
        <PointMaterial
          // transparent
          color={themecolors['color-scheme'] === 'dark' ? '#eccdcd' : '#04291b'}
          size={0.0035}
          // size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Define another functional component named 'StarsCanvas'
const StarsCanvas = () => {
  // return <></>
  // Return a JSX structure containing a three.js Canvas, Suspense, and the 'Stars' component
  return (
    <div className="w-full h-auto absolute inset-0 z-[1]">
      {/* Canvas provides a rendering context for three.js components */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Suspense component allows rendering fallback content while waiting for data */}
        <Suspense fallback={null}>
          {/* Render the 'Stars' component within Suspense */}
          <Stars />
        </Suspense>

        {/* Preload component preloads assets, ensuring they are available when needed */}
        <Preload all />
      </Canvas>
    </div>
  );
};

// Export the 'StarsCanvas' component as the default export
export default StarsCanvas;
