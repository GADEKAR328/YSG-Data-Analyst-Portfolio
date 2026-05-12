import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  max?: number; // max tilt degrees
  glare?: boolean;
};

/**
 * 3D mouse-tracked tilt wrapper. Purely visual — does not change layout or content.
 * Respects prefers-reduced-motion via framer-motion's global setting.
 */
export function Tilt3D({ children, className = "", max = 8, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);

  // glare position
  const glareX = useTransform(sx, [-0.5, 0.5], ["10%", "90%"]);
  const glareY = useTransform(sy, [-0.5, 0.5], ["10%", "90%"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          style={{
            background: `radial-gradient(circle at var(--gx) var(--gy), rgba(255,255,255,0.45), transparent 55%)`,
            // @ts-ignore CSS vars
            "--gx": glareX,
            "--gy": glareY,
          }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
    </motion.div>
  );
}
