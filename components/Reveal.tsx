"use client";
import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(ref.current!);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${on ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`}>
      {children}
    </div>
  );
}
