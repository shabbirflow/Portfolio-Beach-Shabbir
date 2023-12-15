import { Html, useProgress } from "@react-three/drei";
import { Loader2 } from "lucide-react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
          display: "flex",
          flexDirection: "row",
          gap: "1",
        }}
      >
        <span className="px-2">{progress.toFixed(2)}%</span> <Loader2 />
      </p>
    </Html>
  );
};

export default CanvasLoader;
