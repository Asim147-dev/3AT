"use client";
import { useRef } from "react";

// 3D tilt-on-hover wrapper with a moving glare.
export default function Tilt({ children, className = "", max = 10 }: { children: React.ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateZ(8px)`;
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  };
  const leave = () => { ref.current!.style.transform = ""; };
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave}
      className={`tilt relative transition-transform duration-200 ease-out [transform-style:preserve-3d] ${className}`}>
      {children}
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity [.tilt:hover_&]:opacity-100"
        style={{ background: "radial-gradient(260px circle at var(--gx,50%) var(--gy,50%), rgba(127,220,255,.18), transparent 60%)" }} />
    </div>
  );
}
