"use client";
import React, {
  useRef,
  useEffect,
  useCallback,
  ReactNode,
  CSSProperties,
  MouseEvent as ReactMouseEvent,
} from "react";

interface ClickSparkProps {
  children: ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: string;
  extraScale?: number;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

const ClickSpark: React.FC<ClickSparkProps> = ({
  children,
  sparkColor = "#fff",
  sparkSize = 10,
  sparkRadius = 35,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1.0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animFrameRef = useRef<number | null>(null);

  const drawSparks = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const now = Date.now();

    sparksRef.current = sparksRef.current.filter((spark) => {
      const elapsed = now - spark.startTime;
      if (elapsed >= duration) return false;

      const progress = elapsed / duration;
      let easedProgress: number;

      switch (easing) {
        case "ease-in":
          easedProgress = progress * progress;
          break;
        case "ease-in-out":
          easedProgress =
            progress < 0.5
              ? 2 * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;
          break;
        case "ease-out":
        default:
          easedProgress = 1 - Math.pow(1 - progress, 3);
          break;
      }

      const dist = easedProgress * sparkRadius * extraScale;
      const lineLen = sparkSize * (1 - easedProgress);
      const alpha = 1 - easedProgress;

      const x1 = spark.x + Math.cos(spark.angle) * dist;
      const y1 = spark.y + Math.sin(spark.angle) * dist;
      const x2 =
        spark.x + Math.cos(spark.angle) * (dist + lineLen);
      const y2 =
        spark.y + Math.sin(spark.angle) * (dist + lineLen);

      ctx.strokeStyle = sparkColor;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      return true;
    });

    ctx.globalAlpha = 1;

    if (sparksRef.current.length > 0) {
      animFrameRef.current = requestAnimationFrame(drawSparks);
    } else {
      animFrameRef.current = null;
    }
  }, [sparkColor, sparkSize, sparkRadius, duration, easing, extraScale]);

  const handleClick = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const now = Date.now();

      const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
        x,
        y,
        angle: (2 * Math.PI * i) / sparkCount,
        startTime: now,
      }));

      sparksRef.current.push(...newSparks);

      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(drawSparks);
      }
    },
    [sparkCount, drawSparks]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{ position: "relative" } as CSSProperties}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
      {children}
    </div>
  );
};

export default ClickSpark;
