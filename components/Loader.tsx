"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const i = setInterval(() => setN((v) => (v >= 100 ? 100 : v + 4)), 30);
    return () => clearInterval(i);
  }, []);
  useEffect(() => {
    if (n >= 100) {
      const t = setTimeout(() => setDone(true), 250);
      return () => clearTimeout(t);
    }
  }, [n]);
  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070d1a] transition-opacity duration-700 ${done ? "pointer-events-none opacity-0" : ""}`}>
      <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/70">Arriving</p>
      <p className="mt-3 text-6xl font-light tabular-nums text-white">{n}%</p>
    </div>
  );
}
