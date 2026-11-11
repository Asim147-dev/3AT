"use client";
import { useState } from "react";
import { stack } from "@/lib/data";

export default function Stack() {
  const [tab, setTab] = useState("All");
  const all = Object.entries(stack).flatMap(([k, v]) => v.map((n) => [k, n]));
  const tabs = ["All", ...Object.keys(stack)];
  const items = all.filter(([k]) => tab === "All" || k === tab);
  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full border px-4 py-1.5 text-sm ${tab === t ? "border-cyan-300 bg-cyan-300 text-[#070d1a]" : "border-white/15 text-slate-300"}`}
          >
            {t} <span className="opacity-60">{t === "All" ? all.length : stack[t].length}</span>
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {items.map(([k, n]) => (
          <div key={n} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <p className="text-white">{n}</p>
            <p className="mt-1 text-xs text-slate-500">{k}</p>
          </div>
        ))}
      </div>
    </>
  );
}
