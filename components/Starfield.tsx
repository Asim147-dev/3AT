"use client";
import { useEffect, useRef } from "react";

// Hyperspace starfield (2D canvas): stars fly toward the viewer; speed surges on load and while scrolling.
export default function Starfield({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = 260;
    type S = { x: number; y: number; z: number; pz: number };
    const stars: S[] = [];
    const reset = (s: S, far = true) => {
      s.x = (Math.random() - 0.5) * w * 2;
      s.y = (Math.random() - 0.5) * h * 2;
      s.z = far ? Math.random() * w : w;
      s.pz = s.z;
    };
    const resize = () => {
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    for (let i = 0; i < N; i++) { const s = { x: 0, y: 0, z: 0, pz: 0 }; reset(s); stars.push(s); }
    let boost = 28; // initial warp
    let lastY = window.scrollY;
    const onScroll = () => { boost = Math.min(boost + Math.abs(window.scrollY - lastY) * 0.15, 40); lastY = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    const draw = () => {
      boost += (1.2 - boost) * 0.04;
      ctx.fillStyle = "rgba(7,13,26,0.35)";
      ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      for (const s of stars) {
        s.pz = s.z;
        s.z -= boost;
        if (s.z < 1) { reset(s, false); continue; }
        const k = 300 / s.z, pk = 300 / s.pz;
        const x = cx + s.x * k, y = cy + s.y * k;
        const px = cx + s.x * pk, py = cy + s.y * pk;
        const a = Math.min(1, 1.4 - s.z / w);
        ctx.strokeStyle = `rgba(160,210,255,${a})`;
        ctx.lineWidth = Math.max(0.4, (1 - s.z / w) * 2);
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x, y); ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };
    if (reduce) { boost = 0.2; }
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}
